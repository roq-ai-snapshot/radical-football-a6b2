import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player?: PlayerInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
}
