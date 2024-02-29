import axios from "axios";
import { ref, onMounted } from "vue";

export function useCategories() {
  const rootUrl = import.meta.env.VITE_SERVER_URL;
  const categories = ref([]);
  // const iscategoriesLoading = ref(true);

  const fetching = async () => {
    try {
      const response = await axios.get(`${rootUrl}/categories`, {
        params: {
          // _page: 1,
          // _limit: 1,
        },
      });
      categories.value = response.data;
    } catch (e) {
      console.log(e);
    } finally {
      // iscategoriesLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    categories,
  };
}
