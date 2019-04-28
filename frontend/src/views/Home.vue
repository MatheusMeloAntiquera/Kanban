<template>
  <div class="home">
    <b-row>
      <b-col v-for="(column, indexColumn ) in columns" :key="column.name">
        <b-list-group-item>
          <b-card
            @click="showModal = true"
            :title="column.name"
            bg-variant="primary"
            text-variant="white"
          ></b-card>
        </b-list-group-item>
        <draggable :list="column.cards" group="cards" tag="b-list-group">
          <b-list-group-item v-for="(card, indexCard ) in column.cards" :key="card.id">
            <b-card v-if="!card.showInput" @click="openModal(card)">
              
              <b-button
                class="float-right"
                @click="card.showInput = true"
                variant="outline-primary"
              >
                <font-awesome-icon icon="pen"/>
              </b-button>
              <h4>{{ card.name }}</h4>
            </b-card>
            <b-card v-else>
              <b-form-input
                :id="`input_card_${card.id}`"
                :value="card.name"
                @keydown.enter="editCard(indexColumn, indexCard)"
              ></b-form-input>
              <b-button-group class="float-right">
                <b-button variant="success" @click="editCard(indexColumn, indexCard)">save</b-button>
                <b-button @click="card.showInput = false" variant="outline-primary">
                  <font-awesome-icon icon="window-close"/>
                </b-button>
              </b-button-group>
            </b-card>
          </b-list-group-item>
        </draggable>
        <b-list-group-item slot="footer">
          <b-card v-if="column.showInput">
            <b-form-input
              :id="'input_name_' + indexColumn"
              @keydown.enter="newCard(indexColumn)"
              @keydown.esc="hideInput(indexColumn)"
              placeholder="Enter the name of card"
            ></b-form-input>
            <b-button-group class="float-right">
              <b-button variant="success" @click="newCard(indexColumn)">save</b-button>
              <b-button @click="hideInput(indexColumn)" variant="outline-primary">
                <font-awesome-icon icon="window-close"/>
              </b-button>
            </b-button-group>
          </b-card>
          <b-card v-else>
            <b-link @click="showInput(indexColumn)">New Card</b-link>
          </b-card>
        </b-list-group-item>
      </b-col>
      <!-- Column to add a new column -->
      <b-col>
        <b-list-group-item>
          <b-card>
            <h4>
              <b-link @click="1+1">New Column</b-link>
            </h4>
          </b-card>
        </b-list-group-item>
      </b-col>
    </b-row>
    <Modal v-if="showModal" :card="infoCard" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Modal from "../components/Modal";

export default {
  components: {
    draggable,
    Modal
  },
  data() {
    return {
      infoCard: null,
      showModal: false,
      id: 6,
      columns: [
        {
          name: "To Do",
          cards: [
            { id: 1, name: "Lavar roupa", showInput: false, description: 'lavar as calças e as camisetas' },
            { id: 2, name: "Ir ao mercado", showInput: false, description: 'comprar pão, presunto e queijo' },
            { id: 3, name: "Tomar banho", showInput: false, description: '' }
          ],
          showInput: false
        },
        {
          name: "Done",
          cards: [{ id: 5, name: "Lavar roupa", description: 'lavar as calças e as camisetas' }],
          showInput: false
        }
      ]
    };
  },
  methods: {
    newCard(index) {
      const text = document.getElementById(`input_name_${index}`).value;

      this.columns[index].cards.push({
        id: this.id,
        name: text,
        showInput: false
      });
      this.id += 1;

      this.hideInput(index);
    },
    showInput(index) {
      this.columns[index].showInput = true;
    },
    hideInput(index) {
      this.columns[index].showInput = false;
    },
    editCard(indexColumn, indexCard) {
      const card = this.columns[indexColumn].cards[indexCard];
      const name = document.getElementById(`input_card_${card.id}`).value;
      this.columns[indexColumn].cards[indexCard].name = name;
      this.columns[indexColumn].cards[indexCard].showInput = false;
    },
    openModal(card) {
      this.infoCard = card;
      this.showModal = true;
      setTimeout(() => {
        this.$bvModal.show("edit-modal");
      }, 50);
      
    }
  }
};
</script>
<style>
</style>
