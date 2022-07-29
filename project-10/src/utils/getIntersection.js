export default function getIntersection(list1, list2) {
    return list1.filter(value => list2.includes(value));
}