<template>
    <b-modal id="edit-modal" size="lg" hide-footer :hide-header-close="true" :hide-header="true">
      <header>
        <div class="row">
          <div class="column-10 pt-10">
            <font-awesome-icon icon="align-justify" size="lg"/>
          </div>
          <div class="col-80">
            <h3>
              <textarea v-model="card.name" rows="1" @keydown.enter="blurInput"></textarea>
            </h3>
          </div>
          <div class="column-10">
            <button id="close" @click="closeModal">
              <font-awesome-icon icon="window-close"/>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="column-10 pt-10">
            <font-awesome-icon icon="align-left" size="lg"/>
          </div>
          <div class="col-80 pt-10 text-left">
            <h5 style="padding-left: 5px;">
              <b>Description</b>
            </h5>
            <textarea v-model="card.description" rows="6"></textarea>
          </div>
          <div class="column-10 pt-10"></div>
        </div>
      </header>
      <b-button class="mt-3" block @click="closeModal">Close Me</b-button>
    </b-modal>
</template>

<script>
export default {
  props: ["card"],
  methods: {
    closeModal() {
      this.$bvModal.hide("edit-modal");
    },
    blurInput: function(event) {
      event.target.blur();
    }
  }
};
</script>

<style>
#close {
  border: 0;
  border-radius: 30px;
  width: 2.5rem;
  height: 2.5rem;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
textarea {
  resize: none !important;
  border: 0;
  width: 100%;
  position: relative;
  padding: 5px;
}

.text-left {
  text-align: left;
}

.pt-10 {
  padding-top: 10px;
}

button#close:focus {
  outline: none;
}

button.close {
  border-radius: 20px;
}
.column-10 {
  float: left;
  width: 10%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.col-80 {
  float: left;
  width: 80%;
  margin-top: 6px;
}

.col-90 {
  float: left;
  width: 90%;
  margin-top: 6px;
}
</style>
