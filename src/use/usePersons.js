import axios from "axios";
import { ref, onMounted } from "vue";
import { groupByProject } from "@/js/handler";

export function usePersons() {
  const rootUrl = import.meta.env.VITE_SERVER_URL;
  const persons = ref([]);
  // const isPersonsLoading = ref(true);

  const fetching = async () => {
    try {
      const response = await axios.get(`${rootUrl}/persons`, {
        params: {
          // _page: 1,
          // _limit: 1,
        },
      });
      const sortedPersonse = groupByProject(response.data);
      persons.value = sortedPersonse;
    } catch (e) {
      console.log(e);
    } finally {
      // isPersonsLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    persons,
  };
}
