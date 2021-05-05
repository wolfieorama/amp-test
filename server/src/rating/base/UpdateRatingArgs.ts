import { ArgsType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingUpdateInput } from "./RatingUpdateInput";

@ArgsType()
class UpdateRatingArgs {
  @Field(() => RatingWhereUniqueInput, { nullable: false })
  where!: RatingWhereUniqueInput;
  @Field(() => RatingUpdateInput, { nullable: false })
  data!: RatingUpdateInput;
}

export { UpdateRatingArgs };
