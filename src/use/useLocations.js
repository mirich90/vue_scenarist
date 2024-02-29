import axios from "axios";
import { ref, onMounted } from "vue";
import { groupByProject } from "@/js/handler";

export function useLocations() {
  const rootUrl = import.meta.env.VITE_SERVER_URL;
  const locations = ref([]);
  // const islocationsLoading = ref(true);

  const fetching = async () => {
    try {
      const response = await axios.get(`${rootUrl}/locations`, {
        params: {
          // _page: 1,
          // _limit: 1,
        },
      });
      locations.value = groupByProject(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      // islocationsLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    locations,
  };
}
