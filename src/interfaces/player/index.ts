import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  coach_id: string;
  notes?: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  user?: UserInterface;
  academy?: AcademyInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  coach_id?: string;
  notes?: string;
}
