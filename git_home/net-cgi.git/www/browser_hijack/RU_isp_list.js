function work_work(htm_city,htm_isp)
{
var isp_type=new Array(1,
1,
16,
12,
16,
12,
16,
12,
16,
12,
11,
17,
16,
12,
16,
12,
8,
16,
12,
16,
12,
17,
8,
11,
16,
12,
17,
16,
12,
17,
3,
1,
12,
16,
12,
16,
12,
16,
12,
16,
12,
16,
12,
16,
12,
13,
16,
12,
3,
3,
9,
9,
9,
1,
7,
3,
10,
16,
12,
16,
12,
16,
12,
16,
12,
17,
3,
17,
16,
12,
17,
16,
12,
17,
1,
16,
12,
16,
12,
8,
3,
9,
16,
12,
16,
12,
17,
16,
12,
16,
12,
16,
12,
16,
12,
16,
12,
8,
7,
16,
12,
17,
3,
9,
1,
16,
12,
16,
12,
17,
1,
16,
12,
1,
16,
12,
1,
16,
12,
12,
1,
9,
3,
3,
1,
1,
7,
3,
11,
10,
8,
12,
3,
9,
1,
11,
11,
7,
1,
18,
11,
7,
11,
8,
12,
1,
3,
3,
11,
1,
8,
11,
12,
5,
3,
1,
3,
9,
16,
12,
12,
12,
5,
3,
1,
6,
9,
7,
1,
14,
3,
9,
1,
9,
17,
18,
3,
11,
1,
11,
3,
3,
17,
7,
11,
11,
17,
1,
7,
1,
17,
1,
5,
17,
9,
9,
3,
3,
3,
17,
1,
1,
16,
12,
17,
1,
1,
11,
1,
16,
12,
12,
17,
1,
9,
11,
16,
12,
1,
3,
1,
17,
3,
1,
1,
1,
16,
12,
8,
16,
12,
16,
12,
16,
12,
17,
17,
16,
12,
1,
16,
12,
17,
16,
12,
17,
16,
12,
17,
16,
12,
16,
12,
8,
1,
16,
12,
8,
11,
16,
12,
17,
1,
3,
7,
7,
3,
6,
1,
3,
3,
3,
3,
3,
1,
11,
1,
1,
9,
3,
3,
1,
1,
9,
4,
3,
1,
10,
3,
1,
3,
16,
12,
1,
18,
8,
3,
1,
1,
1,
3,
1,
18,
1,
1,
11,
10,
1,
1,
3,
1,
18,
1,
3,
3,
1,
8,
10,
16,
12,
17,
18,
16,
12,
16,
12,
16,
12,
16,
12,
8,
16,
12,
11,
1,
16,
12,
11,
16,
12,
16,
12,
8,
1,
16,
12,
9,
16,
12,
17,
16,
12,
16,
12,
16,
12,
11,
16,
12,
16,
12,
16,
12,
17,
3,
9,
11,
16,
12,
16,
12,
16,
12,
16,
12,
16,
12,
16,
12,
16,
12,
9,
16,
12);


var city=new Array(1,
1,
2,
2,
3,
3,
4,
4,
5,
5,
6,
6,
7,
7,
8,
8,
8,
9,
9,
10,
10,
10,
11,
12,
12,
12,
12,
13,
13,
13,
13,
13,
13,
14,
14,
15,
15,
16,
16,
17,
17,
18,
18,
19,
19,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
21,
21,
22,
22,
23,
23,
24,
24,
25,
25,
25,
26,
26,
27,
28,
28,
28,
28,
29,
29,
30,
30,
30,
31,
31,
32,
32,
33,
33,
34,
35,
35,
36,
36,
37,
37,
38,
38,
39,
39,
39,
40,
40,
40,
40,
40,
40,
40,
41,
41,
42,
42,
42,
42,
43,
43,
44,
45,
45,
46,
47,
47,
48,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
49,
50,
50,
50,
51,
51,
52,
52,
52,
53,
53,
53,
53,
53,
53,
53,
54,
55,
56,
56,
57,
57,
57,
57,
57,
57,
57,
57,
58,
58,
59,
60,
60,
61,
61,
62,
62,
62,
62,
63,
63,
63,
64,
64,
64,
65,
65,
66,
67,
67,
67,
68,
68,
69,
69,
69,
69,
70,
70,
71,
72,
72,
72,
72,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
73,
74,
74,
74,
74,
75,
75,
76,
76,
77,
77,
78,
78,
79,
80,
80,
81,
81,
81,
81,
81,
82,
82,
83,
83,
83,
83,
84,
84,
85,
85,
85,
85,
86,
86,
87,
87,
88,
88,
88,
89,
89,
90,
90,
91,
91,
92,
92,
92,
92,
93,
93,
94,
94,
95,
95,
96,
96,
97,
97,
98,
98,
99,
99,
100,
100,
100);


var vpn_server=["#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"VPN",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"vpn.powernet.com.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"vpn.akado-ural.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"10.0.0.1",
"vpn.mizarpro.com",
"#",
"#",
"#",
"vpn.sky.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"172.30.60.11",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"vpn.bortel-home.net",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"vpn.compot.ru",
"vpn.tt",
"#",
"vpn.gelios.net",
"#",
"vpn.gpinternet.ru",
"#",
"vpn.interlan.ru",
"vpn3.interlan.ru",
"#",
"#",
"#",
"vpn.linkline.ru",
"#",
"vpn.masterlink.lan",
"#",
"ppp.lan",
"#",
"#",
"#",
"vpn.psk-net.ru",
"#",
"#",
"ppp.ultranet.ru",
"10.240.15.255",
"#",
"#",
"#",
"#",
"vpn.asteris.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"vpn.bortel-home.net",
"vpn.velnet.lan",
"#",
"#",
"#",
"#",
"vpn.spacenet.ru",
"#",
"#",
"vpn.kvidex.net",
"#",
"vpn.koptevo.net",
"#",
"172.16.0.200",
"#",
"#",
"#",
"vpn.nln.ru",
"#",
"vpn.netorn.ru",
"#",
"#",
"#",
"#",
"vpn.sviblovo.ru",
"vpn.cln.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"vpn.u-l.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"vpn.nn",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"vpn2.bortel-home.net",
"#",
"#",
"vpn.tagilinternet.ru",
"10.42.100.1",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"server.avtograd.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"vpn.local",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"vpn.local",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"nas.dom.lan",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"vpn.sw-net.spb.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"server.avtograd.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"10.0.0.1",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"10.72.100.1",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"192.168.100.100",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"#",
"#",
"#",
"#",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru",
"10.76.100.1",
"tp.internet.beeline.ru",
"vpn.internet.beeline.ru"];



var con_id=["#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"vpn",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"auth",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"tmnet",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"dom.ru",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"dmnet",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"dom.ru",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"];


var ip=["#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"10.0.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"192.168.x.x",
"192.168.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"10.12.x.x",
"10.12.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"192.168.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"172.16.x.x",
"10.10.x.x",
"#",
"172.16.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.120.x.x",
"10.x.x.x",
"10.10.x.x",
"172.19.x.x",
"85.192.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.35.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"10.21.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"];

var subnet=["#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"255.255.0.0.",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"255.255.x.0",
"255.255.x.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"255.255.255.0",
"255.255.255.0",
"255.255.255.0",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"255.255.255.0",
"255.255.255.0",
"255.255.x.x",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.252.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.0.0",
"255.255.0.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"255.255.255.0",
"#",
"#",
"255.0.0.0",
"#",
"#",
"#",
"#",
"255.255.252.0",
"#",
"#",
"255.0.0.0",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"];


var gateway=["#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.3",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"10.0.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"192.168.x.2",
"192.168.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.253",
"#",
"#",
"10.12.x.1",
"10.12.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"192.168.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"x.x.x.1",
"#",
"#",
"#",
"10.x.x.1",
"172.16.0.1",
"10.10.x.1",
"#",
"172.16.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"x.x.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.120.x.1",
"10.x.x.253",
"10.10.x.1",
"172.19.x.1",
"85.192.x.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.35.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.0.0.1",
"10.21.5.55",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.x.x.1",
"#",
"#",
"10.0.0.1",
"#",
"#",
"#",
"#",
"10.x.x.x",
"#",
"#",
"10.254.0.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"	
];


var dns1=["#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.0.0.1",
"#",
"#",
"217.199.240.2",
"#",
"#",
"87.224.197.1",
"#",
"#",
"#",
"#",
"217.114.10.10",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"87.249.224.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"195.98.160.26",
"78.158.192.26",
"#",
"#",
"#",
"#",
"#",
"#",
"10.112.1.1",
"#",
"#",
"91.197.11.10",
"91.197.11.10",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"213.85.145.1",
"#",
"#",
"194.187.205.226",
"85.93.129.2",
"#",
"#",
"93.182.32.2",
"172.16.0.1",
"81.211.40.2",
"#",
"172.16.0.1",
"#",
"#",
"#",
"#",
"#",
"#",
"10.11.12.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"89.250.0.2",
"#",
"195.178.208.190",
"10.14.0.201",
"172.20.20.20",
"172.19.1.1",
"172.19.1.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"85.12.219.212",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"212.17.13.196",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"192.168.248.21",
"#",
"109.197.48.34",
"#",
"#",
"#",
"#",
"#",
"10.0.0.1",
"10.21.5.55",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.88.88.53",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"91.151.197.34",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.1.1.223",
"#",
"#",
"10.0.0.1",
"#",
"#",
"#",
"#",
"83.243.64.1",
"#",
"217.170.67.5",
"10.254.0.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"];


var dns2=["#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.0.0.2",
"#",
"#",
"217.199.243.2",
"#",
"#",
"87.224.213.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"92.61.16.1.",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"195.98.161.26",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.112.2.1",
"#",
"#",
"91.197.11.2",
"91.197.11.2",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"192.168.0.1",
"#",
"#",
"194.187.204.254",
"85.93.128.2",
"#",
"#",
"93.182.33.2",
"#",
"81.211.38.1",
"#",
"172.16.0.254",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"89.250.1.2",
"#",
"195.178.193.137",
"192.168.0.253",
"172.30.30.30",
"172.19.255.254",
"172.19.255.254",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"217.24.177.2",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"212.17.0.42",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"109.197.49.34",
"#",
"#",
"#",
"#",
"#",
"#",
"10.21.5.54",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.88.88.1",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"195.135.235.5",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"10.1.1.12",
"#",
"#",
"94.247.241.6",
"#",
"#",
"#",
"#",
"83.243.65.2",
"#",
"217.170.64.5",
"85.114.0.81",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"];




    var i=0;
    var j=999;
    
    
    for(i=0;i<385;i++)
    {
        if(city[i]<htm_city)
            continue;
        else if(city[i]==htm_city )
      {
          j=parseInt(i)+parseInt(htm_isp);//real isp num in work(0-384)
          break;
      }  
    
    }
    if(j!= 999)
    {
        parent.isp_type=isp_type[j];
        if(vpn_server[j]!="#")
            parent.vpn_server=vpn_server[j];
        if(con_id[j]!="#")
            parent.connection_id=con_id[j];
        if(ip[j]!="#")
            parent.static_ip=ip[j];
        if(subnet[j]!="#")
            parent.static_subnet=subnet[j];
        if(gateway[j]!="#")
            parent.static_gateway=gateway[j];    
        if(dns1[j]!="#")
            parent.static_dns1=dns1[j]; 
        if(dns2[j]!="#")
            parent.static_dns2=dns2[j]; 
    }
}
