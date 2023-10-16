import java.util.HashMap;
import java.util.Map;

class CheckIn {
    String stationName;
    int time;

    public CheckIn(String stationName, int time) {
        this.stationName = stationName;
        this.time = time;
    }
}

class CheckOut {
    int numTrips;
    int totalTime;

    public CheckOut(int numTrips, int totalTime) {
        this.numTrips = numTrips;
        this.totalTime = totalTime;
    }
}

class UndergroundSystem {
    private Map<Integer, CheckIn> checkIns = new HashMap<>();
    private Map<String, CheckOut> checkOuts = new HashMap<>();

    public void checkIn(int id, String stationName, int t) {
        checkIns.put(id, new CheckIn(stationName, t));
    }

    public void checkOut(int id, String stationName, int t) {
        CheckIn checkIn = checkIns.remove(id);
        String route = checkIn.stationName + "->" + stationName;
        CheckOut checkOut = checkOuts.getOrDefault(route, new CheckOut(0, 0));
        checkOut.numTrips++;
        checkOut.totalTime += t - checkIn.time;
        checkOuts.put(route, checkOut);
    }

    public double getAverageTime(String startStation, String endStation) {
        String route = startStation + "->" + endStation;
        CheckOut checkOut = checkOuts.get(route);
        if (checkOut != null) {
            return (double) checkOut.totalTime / checkOut.numTrips;
        }
        return 0.0; // Default value when no trips recorded for this route.
    }
}
