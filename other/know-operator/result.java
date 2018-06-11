public class result {
    public static void main(String args[]) {
      int a = -2147483648;
      System.out.println(a == -a && a != 0);
      System.out.println(1 & 1 - 1 ^ 0); // 1 - 1 -> 1 & 0 -> 0 ^ 0
    }
}
