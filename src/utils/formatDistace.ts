export default function formatDistance(distance: number) {
    if (distance >= 1000) {
        distance = distance / 1000;
        return `${distance}km`;
    }
    return `${distance}m`;
}