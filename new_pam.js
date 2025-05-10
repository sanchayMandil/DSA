function longestPalindromicSubstring(s) {
  //^#a#b#a#a#b#c#$
  var T = preProcess(s);
  var n = T.length;
  var P = new Array(n).fill(0);
  var C = 0,
    R = 0;
  for (var i = 1; i < n - 1; i++) {
    // if we don't write this line of code then while loop time complexcity go O(n)
    // this if block hlep to reduse the extra calculation by using previous calculations
    //Mean like we know that palinidrome have the symmertic pattern in ther nature 
    //so if know the half the half value will be same 
    //R and C keep the track of previous longest palindrom in substring
      var i_mirror = 2 * C - i;
      if (R > i)
        P[i] = Math.min(R - i, P[i_mirror]);
    while (i + 1 + P[i] < n && i - 1 - P[i] >= 0 &&
      T.charAt(i + 1 + P[i]) == T.charAt(i - 1 - P[i]))
      P[i]++;
      if (i + P[i] > R) {
        C = i;
        R = i + P[i];}
  }
  var maxLen = 0;
  var centerIndex = 0;
  for (var i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  } //console.log(Math.floor((centerIndex  - maxLen) / 2));
  return s.substr((centerIndex - maxLen) / 2, maxLen);
}

function preProcess(s) {
  var ret = "#";
  for (var i = 0; i < s.length; i++) ret += s.charAt(i) + "#";
  return ret;
}
//s = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";

s = "abaab";
console.log(longestPalindromicSubstring(s));
