export class HealthService {
    private startupDate: Date

    constructor() {
        this.startupDate = new Date()
    }

    public health() {
        return {
            'message': 'I am Health',
            'startup': this.startupDate.toLocaleString(),
            'buildDate': process.env.BUILD_DATE || "unavailable",
            'commitHash': process.env.COMMIT_HASH || "unavailable"
        }
    }
}