import axios from "axios";
import { ref, onMounted } from "vue";
import { groupByProject } from "@/js/handler";

export function useScenes() {
  const rootUrl = import.meta.env.VITE_SERVER_URL;
  const scenes = ref([]);

  const fetching = async () => {
    try {
      const response = await axios.get(`${rootUrl}/scenes`);
      scenes.value = groupByProject(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      // isPersonsLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    scenes,
  };
}
