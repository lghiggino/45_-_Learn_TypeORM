import { Controller, Get, Route } from "tsoa";
import { HealthService } from "./healthService";

const healthService = new HealthService

@Route("health")
export class HealthController extends Controller{
    @Get("/")
    public health() {
        return healthService.health()
    }
}
