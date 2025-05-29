import React from "react";
import {
  useCreateRecipeMutation,
  useDeleteRecipeMutation,
  useGetRecipesQuery,
} from "../redux/api/recipe.api";

const About = () => {
  
  // const { data, isLoading, isError, error, isFetching } = useGetRecipesQuery(
  //   {limit:5, genres: "20,18",}
  // );
  // const [createRecipe, { isLoading: createLoading }] = useCreateRecipeMutation();
  // const [deleteRecipe, { isLoading: deleteLoading }] = useDeleteRecipeMutation();

  // const handleSubmit = () => {
  //   createRecipe(newRecipe)
  // }

  // const handleDelete = (id) => {
  //   deleteRecipe(id)
  // }

  return (
    <div>
      About
    </div>
  );
};

export default About;
