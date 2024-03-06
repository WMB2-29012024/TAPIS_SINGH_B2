public class lc214 {
    public static boolean isPalindrome(String sub) {
        return sub.equals(new StringBuilder(sub).reverse().toString());
    }
    
    public static String shortestPalindrome(String s) {
        if (s == null || s.isEmpty()) {
            return "";
        }
        
        // Function to check if a substring is a palindrome
       
        
        // Find the longest palindrome substring starting from the beginning
        for (int i = s.length(); i >= 0; i--) {
            if (isPalindrome(s.substring(0, i))) {
                // Reverse the remaining part of the string and append it to the beginning
                return new StringBuilder(s.substring(i)).reverse().toString() + s;
            }
        }
        
        return s; // If no palindrome found, return the string itself
    }
    
    public static void main(String[] args) {
        // Test cases
        System.out.println(shortestPalindrome("aacecaaa")); // Output: "aaacecaaa"
        System.out.println(shortestPalindrome("abcd"));     // Output: "dcbabcd"
    }
}
