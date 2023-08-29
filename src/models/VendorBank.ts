import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Vendor } from './Vendor';

@Table
class VendorBank extends Model<VendorBank> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  beneficiaryName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  accountNumber!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ifsc!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bankName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  branch!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  proofAttUrl!: string;

  @ForeignKey(() => Vendor)
  @Column({
    type: DataType.INTEGER,
  })
  vendorId!: number;

  @BelongsTo(() => Vendor)
  vendor?: Vendor;
}

export default VendorBank;
