export interface Request {
  _id:         string;
  idUser:      string;
  idProduct:   string;
  value:       number;
  time:        number;
  description: string;
  estate:      string;
  createdAt:   Date;
  updatedAt:   Date;
  __v:         number;
}


export interface CreateRequest {
  idUser:      any;
  idProduct:   string;
  value:       number;
  time:        number;
  description: string;
  estate:      string;
}
