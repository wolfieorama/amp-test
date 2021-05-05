import { ArgsType, Field } from "@nestjs/graphql";
import { RatingWhereInput } from "./RatingWhereInput";

@ArgsType()
class RatingFindManyArgs {
  @Field(() => RatingWhereInput, { nullable: true })
  where?: RatingWhereInput;
}

export { RatingFindManyArgs };
