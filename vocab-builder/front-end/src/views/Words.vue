<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>Italian</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, i) in paginatedWords" :key="i">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td>{{ word.italian }}</td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'show', params: {id: word._id}}">Show</router-link>
          </td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit', params: {id: word._id}}">Edit</router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
            <a :href="` /words/${word._id}`">Destroy</a>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :currentPage="currentPage"
      :words="words"
      :pageSize="perPage"
      @update:currentPage="updatePage"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import Pagination from '../components/Pagination.vue';

export default {
  components: { Pagination },
  name: 'words',
  data() {
    return {
      words: [],
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.words.length / this.perPage);
    },
    paginatedWords() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.words.slice(start, end);
    }
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteWord(id);
      this.flash('Word deleted successfully!', 'success');
      const newWords = this.words.filter(word => word._id !== id);
      this.words = newWords;
    },
    updatePage(newPage) {
      this.currentPage = newPage;
    }
  },
  async mounted() {
    this.words = await api.getWords();
    this.words.reverse();
  }
};
</script>