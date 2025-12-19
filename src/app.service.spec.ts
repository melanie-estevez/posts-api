import {Test, TestingModule} from '@nestjs/testing';
import { AppService } from './app.service';
import { AppController } from './app.controller';
describe('AppService',()=>{
    let appController: AppService;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        service =module.get<AppService>(AppService);
    });

    it('deberia esta definido',()=>{
      expect(service).toBeDefined();
    });

   it('getHello()deberia retornar el mensaje esperado', ()=>{
        expect(service.getHello()).toBe(
            'Hello World desde los poderosos programadores del Tercer Semestre',
        );
   });

   it('getHello() deberia retornar un string no vacio', ()=>{
     const result = service.getHello();
     expect(typeof result).toBe('string');
     expect(result.length).toBeGreaterThan(0);
   });
});
