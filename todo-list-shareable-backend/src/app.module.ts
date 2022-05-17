import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
//Modules are an effective way to organize components by a closely related set of capabilities (per feature)
// Decorator provides metadata that nest   uses to organize the application structure
// Module is a schematic
@Module({
  // list of modules required by these modules. any exported provider by these modules will now be available via dependency injection
  imports: [TasksModule],
  // array of controllers to be instantiated     sdf sdfsssssswithin the module
  // responsible for handling incoming requests and returning responses to the client
  // bound to a specific path (for example "/tasks" for the tasks resource)
  // contains handlers, which handle endpoints and requests method (GET,POST,DELETE etc...)
  // can take advantage of dependesssdasdsdfdsfncy injection to consume providers within the same modules
  // Define: @Controller decorator accepts string as a path to be handled by the controller
  // @Controller('/tasks')
  // Define handler in a controller by @Get, @Post, @Delete etc... it is simply methods
  controllers: [],
  // array of providers to be available within the module via dependency injection
  // @Injectable can be injected into constructor via dependency injection
  // can be a plain value, a class, sync/async factory etc.
  // providers must be provided to a module for them to be usable
  // can be exported from a module - and then be available to other modules that imports it
  //What are services:
  // Defined as providers. Not all providers are services
  // serv are implemented using providers. Not all providers are services
  // serv can be implemented as singleton patterns which are design patterns when wrapped with @Injectable() and the provided to a module
  // That means that the same instance will be shared across the application - acting as a single source of truth(singleton design pattern)
  // The main source of business logic. For example, a service will be called from a controller to validate data, create an item in the database and return a response
  providers: [],
  // array of providers to export to other modules
  exports: [],
})
export class AppModule {}
