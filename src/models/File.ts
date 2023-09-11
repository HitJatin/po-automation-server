import { Model, Table, Column, DataType, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey, AllowNull } from 'sequelize-typescript';
import BuyingOrder from './BuyingOrder';
import SKU from './SKU';
import Vendor from './Vendor';

@Table({
  tableName: 'files',
})
export default class File extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER
  })
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  fileName!: string;

  @AllowNull(false)
  @Column({
    type: DataType.BLOB('medium')
  })
  fileContent!: Buffer;

  @Column({
    type: DataType.STRING
  })
  fileType!: string;

  @ForeignKey(() => BuyingOrder)
  @Column({
    type: DataType.INTEGER
  })
  buyingOrderId!: number

  @ForeignKey(() => SKU)
  @Column({
    type: DataType.INTEGER
  })
  skuId!: number

  @ForeignKey(() => Vendor)
  @Column({
    type: DataType.INTEGER
  })
  vendorId!: number;

  @BelongsTo(() => BuyingOrder)
  buyingOrder!: BuyingOrder;

  @BelongsTo(() => SKU)
  sku!: SKU;

  @BelongsTo(() => Vendor)
  vendor!: Vendor;
}
