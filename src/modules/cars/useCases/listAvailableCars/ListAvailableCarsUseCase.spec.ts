import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description 1",
            daily_rate: 110.0,
            license_plate: "DEF-1111",
            fine_amount: 40,
            brand: "Car brand 1",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description 2",
            daily_rate: 110.0,
            license_plate: "DEF-2222",
            fine_amount: 40,
            brand: "Car brand 2",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car brand 2",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description 3",
            daily_rate: 110.0,
            license_plate: "DEF-3333",
            fine_amount: 40,
            brand: "Car brand 3",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Car3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car4",
            description: "Car description 4",
            daily_rate: 110.0,
            license_plate: "DEF-4444",
            fine_amount: 40,
            brand: "Car brand 4",
            category_id: "category_id test",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "category_id test",
        });

        expect(cars).toEqual([car]);
    });
});
