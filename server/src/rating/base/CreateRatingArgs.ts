import { ArgsType, Field } from "@nestjs/graphql";
import { RatingCreateInput } from "./RatingCreateInput";

@ArgsType()
class CreateRatingArgs {
  @Field(() => RatingCreateInput, { nullable: false })
  data!: RatingCreateInput;
}

export { CreateRatingArgs };
