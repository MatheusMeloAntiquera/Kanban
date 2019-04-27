<template>
  <div class="home">
    <b-row>
      <b-col v-for="column in columns" :key="column.name" class="no-padding">
         <b-list-group-item>{{ column.name }}</b-list-group-item>
        <draggable :list="column.cards" group="cards" tag="b-list-group">
          <b-list-group-item v-for="card in column.cards" :key="card.id">{{ card.name }}</b-list-group-item>
        </draggable>
        <b-list-group-item slot="footer">
            <b-button block variant="primary">New</b-button>
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
      columns: [
        {
          name: "ToDo",
          cards: [
            { id: 1, name: "Lavar roupa" },
            { id: 2, name: "Ir ao mercado" },
            { id: 3, name: "Tomar banho" }
          ]
        },
        {
          name: "Done",
          cards: [{ id: 5, name: "Lavar roupa" }]
        }
      ]
    };
  }
};
</script>
<style>
.no-padding{
  padding: 0;
}
</style>
