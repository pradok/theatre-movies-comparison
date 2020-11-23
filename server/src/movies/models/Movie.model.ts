import { Field, Float, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Object representing cooking recipe" })
export class Movie {
  @Field(() => ID)
  ID: string;

  @Field()
  Title: string;

  @Field()
  Type: string;

  @Field()
  Poster: string;

  @Field(() => Float, { nullable: true })
  Price?: number;

  @Field(() => String, { nullable: true })
  Provider?: string;
}
