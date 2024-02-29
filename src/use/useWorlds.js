import axios from "axios";
import { ref, onMounted } from "vue";
import { groupByProject } from "@/js/handler";

export function useWorlds() {
  const rootUrl = import.meta.env.VITE_SERVER_URL;
  const worlds = ref([]);
  // const isworldsLoading = ref(true);

  const fetching = async () => {
    try {
      const response = await axios.get(`${rootUrl}/worlds`, {
        params: {
          // _page: 1,
          // _limit: 1,
        },
      });
      worlds.value = groupByProject(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      // isworldsLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    worlds,
  };
}
