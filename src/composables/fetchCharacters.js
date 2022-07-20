import axios from "axios";
import orderBy from "lodash";
import { ref, reactive, computed } from "vue";

export default function useFetchAllCharacters(html) {
  let characters = reactive([]);
  let loadingState = ref(null);
  let orderKey = ref("id");
  const setOrderKey = (key) => {
    orderKey.value = key;
  };
  const fetchAllCharacters = () => {
    loadingState.value = "loading";
    axios.get(html).then((response) => {
      setTimeout(() => {
        loadingState.value = "success";
        characters = response.data.results;
      }, 1000);
    });
  };

  const charactersOrdered = computed(() => {
    return orderBy(characters, orderKey.value);
  });

  return { setOrderKey, fetchAllCharacters, charactersOrdered };
}
