import axios from "axios";
import { ref, onMounted } from "vue";

export function useProjects() {
  const rootUrl = import.meta.env.VITE_SERVER_URL;
  const projects = ref([]);
  // const isPersonsLoading = ref(true);

  const fetching = async () => {
    try {
      const response = await axios.get(`${rootUrl}/projects`, {
        params: {
          // _page: 1,
          // _limit: 1,
        },
      });
      projects.value = response.data;
    } catch (e) {
      console.log(e);
    } finally {
      // isPersonsLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    projects,
  };
}
