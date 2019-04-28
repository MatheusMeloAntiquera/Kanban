<template>
  <div class="home">
    <b-row>
      <b-col v-for="(column, indexColumn ) in columns" :key="column.name">
        <b-list-group-item>
          <b-card :title="column.name" bg-variant="primary" text-variant="white"></b-card>
        </b-list-group-item>
        <draggable :list="column.cards" group="cards" tag="b-list-group">
          <b-list-group-item v-for="card in column.cards" :key="card.id">
            <b-card v-if="!card.showInput">
                <b-button class="float-right" @click="card.showInput = true" variant="outline-primary"><font-awesome-icon icon="pen" /></b-button>
                <h4>{{ card.name }}</h4>
            </b-card>
            <b-card v-else>
              <b-form-input
                v-model="card.name"
                @keydown.enter="card.showInput = false"
                @blur="card.showInput = false"
              ></b-form-input>
              <b-button-group class="float-right">
                <b-button variant="success" @click="card.showInput = false">save</b-button>
                <b-button @click="card.showInput = false" variant="outline-primary"><font-awesome-icon icon="window-close" /></b-button>
              </b-button-group>
              
            </b-card>
          </b-list-group-item>
        </draggable>
        <b-list-group-item slot="footer">
          <b-card>
            <b-form-input
              v-if="column.showInput"
              :id="'input_name_' + indexColumn"
              @keydown.enter="newCard(indexColumn)"
              @keydown.esc="hideInput(indexColumn)"
              @blur="hideInput(indexColumn)"
              placeholder="Enter the name of card"
            ></b-form-input>
            <b-link v-else @click="showInput(indexColumn)">New Card</b-link>
          </b-card>
        </b-list-group-item>
      </b-col>
      <!-- Column to add a new column -->
      <b-col>
        <b-list-group-item>
          <b-card >
            <h4><b-link @click="1+1">New Column</b-link></h4>
          </b-card>
        </b-list-group-item>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      id: 6,
      columns: [
        {
          name: "To Do",
          cards: [
            { id: 1, name: "Lavar roupa", showInput: false },
            { id: 2, name: "Ir ao mercado", showInput: false },
            { id: 3, name: "Tomar banho", showInput: false }
          ],
          showInput: false
        },
        {
          name: "Done",
          cards: [{ id: 5, name: "Lavar roupa" }],
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
    }
  }
};
</script>
<style>
</style>
