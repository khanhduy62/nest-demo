import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDTO } from 'src/common/base.dto';

export class UserDto extends BaseDTO {
  @IsNotEmpty()
  @Expose()
  username: string;

  firstName: string;
  lastName: string;

  @Expose()
  @Transform(({ obj }) => (obj.firstName || '') + ' ' + (obj.lastName || ''), {
    toClassOnly: true,
  })
  fullName: string;

  @IsNotEmpty()
  @Length(6, 256)
  @Expose()
  password: string;
}
