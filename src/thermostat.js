class Airport {

    capacity = 1;

    planes = [];

    land(plane) {
        if (this.planes.length >= this.capacity) {
            return "Airport is full"
        }
        this.planes.push(plane);
    }
}