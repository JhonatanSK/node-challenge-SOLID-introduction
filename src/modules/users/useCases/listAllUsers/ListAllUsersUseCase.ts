import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const foundedUser = this.usersRepository.findById(user_id);

    if (!foundedUser) {
      throw new Error("User does not exist!");
    }

    if (!foundedUser.admin) {
      throw new Error("User provided is not an admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
