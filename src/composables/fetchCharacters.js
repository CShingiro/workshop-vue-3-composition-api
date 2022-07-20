import axios from "axios";
import { ref } from "vue";

export default function useFetchResource(html) {
  let data = ref([]);
  let loadingState = ref(null);
  const fetchResource = () => {
    loadingState.value = "loading";
    axios.get(html).then((response) => {
      setTimeout(() => {
        loadingState.value = "success";
        data.value = response.data.results;
      }, 1000);
    });
  };

  return {
    loadingState,
    data,
    fetchResource,
  };
}
