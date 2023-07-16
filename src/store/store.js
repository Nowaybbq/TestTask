import { create } from "zustand";

const useRecipesStore = create((set) => ({
   recipes: [],
   selectedRecipes: [],
   currentPage: 1,
   selectRecipe: (id) => set((state) => {
      const selectedRecipe = state.recipes.find((item) => item.id === id);
      if (selectedRecipe) {
         return {
            selectedRecipes: [...state.selectedRecipes, selectedRecipe]
         };
      }
      return state;
   }),
   removeSelectedRecipe: (id) => set((state) => ({
      selectedRecipes: state.selectedRecipes.filter((item) => item.id !== id)
   })),

   removeSelectedRecipes: () => set((state) => ({
      recipes: state.recipes.filter((item) => !state.selectedRecipes.includes(item)),
      selectedRecipes: []
   })),
   fetchRecipes: async () => {
      const { currentPage } = useRecipesStore.getState();
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
      const result = await response.json();
      set((state) => ({
         recipes: result,
         currentPage: state.currentPage + 1
      }));
   }
}));

export default useRecipesStore;