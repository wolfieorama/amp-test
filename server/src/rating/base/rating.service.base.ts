import { PrismaService } from "nestjs-prisma";
import { Prisma, Rating } from "@prisma/client";

export class RatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.RatingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingFindManyArgs>
  ): Promise<Rating[]> {
    return this.prisma.rating.findMany(args);
  }
  async findOne<T extends Prisma.RatingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingFindUniqueArgs>
  ): Promise<Rating | null> {
    return this.prisma.rating.findUnique(args);
  }
  async create<T extends Prisma.RatingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingCreateArgs>
  ): Promise<Rating> {
    return this.prisma.rating.create<T>(args);
  }
  async update<T extends Prisma.RatingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingUpdateArgs>
  ): Promise<Rating> {
    return this.prisma.rating.update<T>(args);
  }
  async delete<T extends Prisma.RatingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingDeleteArgs>
  ): Promise<Rating> {
    return this.prisma.rating.delete(args);
  }
}
