import { reactive, watch } from 'vue';

interface Store {
  theme: string;
  toggleTheme: () => void;
}

export const store: Store = reactive({
  theme: localStorage.getItem('theme') || 'blue',

  toggleTheme() {
    switch (this.theme) {
      case 'blue':
        this.theme = 'white';
        break;

        case 'white':
          this.theme = 'purple';
          break;

        default:
          this.theme = 'blue';
    }
  }
});

watch(store, () => {
  localStorage.setItem('theme', store.theme);
});
