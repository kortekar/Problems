public class Hello {
    static int max(int a,int b,int c){
     return a>b? (a>c? a:c) : (b>c? b:c);
    }
    public static void main(String[] args) {
        int a=510,b=20,c=40;
        int sum = max(a,b,c);
        System.out.println("max is : "+ sum);
    }
}
