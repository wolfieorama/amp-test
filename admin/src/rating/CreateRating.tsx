import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Rating as TRating } from "../api/rating/Rating";
import { RatingCreateInput } from "../api/rating/RatingCreateInput";

const INITIAL_VALUES = {} as RatingCreateInput;

export const CreateRating = (): React.ReactElement => {
  useBreadcrumbs("/ratings/new", "Create ratings");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    TRating,
    AxiosError,
    RatingCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/ratings", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/ratings"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: RatingCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create ratings"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <TextField type="number" label="score" name="score" />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
