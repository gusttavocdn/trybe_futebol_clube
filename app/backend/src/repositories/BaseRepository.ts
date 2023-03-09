import { Model, ModelCtor } from 'sequelize';

export default abstract class BaseRepository<T extends Model, K> {
  private readonly model: ModelCtor<T>;

  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  public async findAll(): Promise<K[]> {
    return this.model.findAll() as unknown as Promise<K[]>;
  }

  public async findById(id: number): Promise<K | null> {
    const data = await this.model.findByPk(id);

    if (!data) return null;

    return data as unknown as K;
  }

  public async create(data: Omit<K, 'id'>): Promise<K> {
    return this.model.create(data) as unknown as K;
  }

  public async update(id: number, data: Partial<T>): Promise<boolean> {
    const [rowsAffected] = await this.model.update(data, {
      where: { id },
    });

    return rowsAffected > 0;
  }

  public async delete(id: number): Promise<boolean> {
    const rowsAffected = await this.model.destroy({
      where: { id },
    });

    return rowsAffected > 0;
  }
}
