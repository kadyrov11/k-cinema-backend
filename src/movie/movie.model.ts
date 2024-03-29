import { Ref, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

import { ActorModel } from '../actor/actor.model';
import { GenreModel } from '../genre/genre.model';

class Parameters {
  @prop()
  year: number;

  @prop()
  duration: number;

  @prop()
  country: string;
}

export interface MovieModel extends Base {}

export class MovieModel extends TimeStamps {
  @prop()
  poster: string;

  @prop()
  bigPoster: string;

  @prop()
  title: string;

  @prop({ unique: true })
  slug: string;

  @prop({ default: 0 })
  rating?: number;

  @prop({ default: 0 })
  views: number;

  @prop({ default: {} })
  parameters: Parameters;

  @prop()
  videoUrl: string;

  @prop({ ref: () => GenreModel })
  genres: Ref<GenreModel>[];

  @prop({ ref: () => ActorModel })
  actors: Ref<ActorModel>[];

  @prop({ default: false })
  isExistTg?: boolean;
}

