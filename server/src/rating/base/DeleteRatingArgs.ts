import { ArgsType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";

@ArgsType()
class DeleteRatingArgs {
  @Field(() => RatingWhereUniqueInput, { nullable: false })
  where!: RatingWhereUniqueInput;
}

export { DeleteRatingArgs };
