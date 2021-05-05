import { ArgsType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";

@ArgsType()
class RatingFindUniqueArgs {
  @Field(() => RatingWhereUniqueInput, { nullable: false })
  where!: RatingWhereUniqueInput;
}

export { RatingFindUniqueArgs };
