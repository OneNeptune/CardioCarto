# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Route.destroy_all
Friendship.destroy_all

users = [
  User.create(
    first_name: 'Usain',
    last_name: 'Bolt',
    email: 'guest.user@cardiocarto.com',
    password: 'starship76',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/usain-bolt-1.jpg'
  ),
  User.create(
    first_name: 'Michael',
    last_name: 'Bennett',
    email: 'mbennett@cardiocarto.com',
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/101.png'
  ),
  User.create(
    first_name: 'Isabel',
    last_name: 'Robers',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/23.jpg'
  ),
  User.create(
    first_name: 'Elsie',
    last_name: 'Hamm',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/30.jpg'
  ),
  User.create(
    first_name: 'Jasmine',
    last_name: 'Marshall',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/35.jpg'
  ),
  User.create(
    first_name: 'Johanna',
    last_name: 'Flor',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/45.jpg'
  ),
  User.create(
    first_name: 'Douglas',
    last_name: 'Temme',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/54.jpg'
  ),
  User.create(
    first_name: 'Robert',
    last_name: 'Turner',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/55.jpg'
  ),
  User.create(
    first_name: 'Elizabeth',
    last_name: 'Carpenter',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/89.jpg'
  ),
  User.create(
    first_name: 'Ricky',
    last_name: 'Valentin',
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/90.jpg'
  ),
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/2j323.png'
  ),
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/demo.png'
  ),
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/sdfsdf23r2.png'
  ),
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/sdfsdf23r2.png'
  ),
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/testing.png'
  ),
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password',
    image: 'https://s3.us-east-2.amazonaws.com/cardio-carto-dev/seedavas/we.png'
  )
]

time_mods = (1..48).to_a

titles = ["New Route!","Midtown East Morning Route","Tour of Brooklyn","Astoria Route","Harlem > Queens > UES","FiDi Afternoon Run","Tour de Bronx","Morning Scenic Jog","Bryant Park Sprint","Chelsea Piers","Central Park Grinder","Bethesda Fountain Route","Roosevelt Island Mash","Rickety Randall Path","Hoboken Shodoken","Manhattan Iron Marathon","Morning Greatlawn","2 laps of the museums","Bx Park","4SQUARE","Mostly Ferry!","WaBridge Frogger","Homerun","Borough Check","Fun Weekend Run","Penn 2 Grand","College Tour","Montauk Daytrip","Central Park Lap","Madison Swirl","Houston Shuttle","Houston to Hell's Kitchen","Short n Sweet","Hi route","Ave Hustle","Tompkins Morning Sprint","HighLineComplete","7th Ave SPRINT","1mile zipper","Gambit","Pearl Sprint"]

distances = [2883.0, 5334.0, 11381.0, 4121.0, 19092.0, 1906.0, 15389.0, 2609.0, 616.0, 5129.0, 3516.0, 806.0, 6207.0, 4344.0, 7268.0, 49246.0, 2300.0, 3535.0, 8688.0, 4712.0, 3767.0, 2471.0, 2378971.0, 33929.0, 5150.0, 1967.0, 12395.0, 188041.0, 9943.0, 1601.0, 2919.0, 5991.0, 3035.0, 2809.0, 6675.0, 899.0, 2345.0, 805.0, 1795.0, 5779.0, 1590.0]

durations = [891, 1642, 3448, 1240, 5722, 590, 4782, 815, 182, 1564, 1071, 248, 1814, 1276, 2197, 14680, 678, 1060, 2596, 1442, 894, 830, 707575, 8250, 1582, 609, 3792, 55839, 2959, 464, 898, 1836, 905, 835, 2026, 258, 678, 241, 536, 1765, 473]

completion_times =[924, 2529, 3782, 1206, 7443, 482, 3784, 909, 123, 1449, 876, 222, 2528, 0, 0, 13325, 928, 1228, 2722, 1617, 1817, 5422, 90060, 8159, 0, 0, 0, 0, 0, 0, 840, 1623, 780, 900, 0, 180, 0, 245, 0, 1544, 540]

completeds = [true, true, true, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, false, true, true, true, true, true, false, false, false, false, false, false, true, true, true, true, false, true, false, true, false, true, true]

start_addresses = ["271-281 9th Ave, New York, NY 10001, USA", "80-98 Vanderbilt Ave, New York, NY 10017, USA", "7 Clinton St, New York, NY 10002, USA", "38-48-38-98 Northern Blvd, Long Island City, NY 11101, USA", "251 E 123rd St, New York, NY 10035, USA", "285 World Trade Center, New York, NY 10006, USA", "56-98 145th St Bridge, New York, NY 10039, USA", "106 Kenmare St, New York, NY 10012, USA", "1095 Bryant Park, New York, NY 10036, USA", "307 W 14th St, New York, NY 10011, USA", "Central Park Driveway, New York, NY 10019, USA", "Victor Herbert, New York, NY 10019, USA", "1 FDR Drive, New York, NY 10044, USA", "65 Charles Gay Loop, New York, NY 10035, USA", "1327 Willow Ave, Hoboken, NJ 07030, USA", "South Ferry Plaza, 4 South St, New York, NY 10004, USA", "81 Central Park West, New York, NY 10024, USA", "1251 5th Ave, New York, NY 10029, USA", "Bronx Park Rd, Bronx, NY 10458, USA", "26 Washington Square N, New York, NY 10011, USA", "371 W 34th St, New York, NY 10001, USA", "385 Fort Washington Ave, New York, NY 10033, USA", "4058 Broadway, New York, NY 10032, USA", "114 Belmont Pl, Staten Island, NY 10301, USA", "261 8th Ave, New York, NY 10011, USA", "421-439 8th Ave, New York, NY 10001, USA", "135-163 E 24th St, New York, NY 10010, USA", "1880 E 8th St, Brooklyn, NY 11223, USA", "6418 5th Ave, New York, NY 10022, USA", "2 E 26th St, New York, NY 10010, USA", "500 E Houston St, New York, NY 10009, USA", "360-380 E Houston St, New York, NY 10009, USA", "269 9th Ave, New York, NY 10001, USA", "401 W 15th St, New York, NY 10011, USA", "785-793 2nd Ave, New York, NY 10017, USA", "155 Avenue A, New York, NY 10009, USA", "High Line, New York, NY 10014, USA", "200 W 52nd St, New York, NY 10019, USA", "1 E 61st St, New York, NY 10065, USA", "717 6th Ave, New York, NY 10009, USA", "Samuel Osgood House, New York, NY 10038, USA"]

finish_addresses = ["655 6th Ave, New York, NY 10010, USA", "124 Park Ave, New York, NY 10016, USA", "213 E Houston St, New York, NY 10002, USA", "30-9-30-13 36th Ave, Astoria, NY 11106, USA", "2025 Lexington Ave, New York, NY 10035, USA", "100-138 Barclay St, New York, NY 10007, USA", "110n W 145th St, New York, NY 10039, USA", "200-210 Lafayette St, New York, NY 10012, USA", "1092-1098 Bryant Park, New York, NY 10036, USA", "320n W 14th St, New York, NY 10014, USA", "1806 Central Park S, New York, NY 10019, USA", "Victor Herbert, New York, NY 10019, USA", "1 FDR Drive, New York, NY 10044, USA", "40R Bronx Shore Rd, New York, NY 10035, USA", "279-295 14th St, Hoboken, NJ 07030, USA", "Battery Park Underpass, New York, NY 10004, USA", "201-211 Central Park West, New York, NY 10024, USA", "1251 5th Ave, New York, NY 10029, USA", "2855 Southern Blvd, Bronx, NY 10458, USA", "20 Washington Square N, New York, NY 10012, USA", "1909 Willow Ave, Weehawken, NJ 07086, USA", "2050 Hudson Terrace, Fort Lee, NJ 07024, USA", "301-499 N Dewey Ave, Oklahoma City, OK 73102, USA", "3391 Park Ave, Bronx, NY 10456, USA", "270 8th Ave, New York, NY 10011, USA", "127 Park Ave, New York, NY 10016, USA", "3753 Broadway, New York, NY 10032, USA", "28 S Dewitt Pl, Montauk, NY 11954, USA", "2-22 Central Park S, New York, NY 10019, USA", "998 Broadway, New York, NY 10010, USA", "250-278 W Houston St, New York, NY 10014, USA", "721-725 10th Ave, New York, NY 10019, USA", "420 W 26th St, New York, NY 10001, USA", "201 W 20th St, New York, NY 10011, USA", "300 E 42nd St, New York, NY 10017, USA", "300-340 E 10th St, New York, NY 10009, USA", "5861 High Line, New York, NY 10001, USA", "582 7th Ave, New York, NY 10036, USA", "870 5th Ave, New York, NY 10065, USA", "119 W 23rd St, New York, NY 10011, USA", "15 Battery Pl, New York, NY 10004, USA"]

polylines = ['uvuwFjatbMqDcC}BwArFaQfLq^jMaa@fBqFZeAOKj@^RLhEpCvBxAcCtHI\XdAJnBC@CBCF?TBFBDIbA?^IV_@vAQ`@GFcA`D}CvJzBxAfDzBRNdFhD','a_wwFfoobMqA{@`@mARm@_C{AwFqDyFwDwFwD{FuDiGeE_C}AM`@CFBGZcA~D_MB]~@sCjBwFbAcDHi@FDxDfCjMjIbEsM`CxAxBvAzFxDdAr@F?^Lf@Z^F|@^fAn@lA|@HJl@t@LPDJzGlErAz@ZLh@Z`@TfAh@P@JD~AdAJHb@p@f@b@PVRLzBxAzBxAtFpD`G|Dd@Ze@[eCaByFsDsFsD{ByAe@~AsD|KyD|L]fA{ByAqA|Dc@zAgBvFEJEPcBeA','cipwFr_qbMbRxHJBZNPJJc@FSx@_E|Iqb@@]L{@pAoG`Nup@rCcNx@yD^gBb@cBjD{Ph@yCLaABe@@OBCDEBE@D@JFQHQF?p@V@JDH^VEPZDh@@hJdA\JHLFJjB{BbF{F^a@j@\`H|CxBnArDtB\L^V~CxAVFtBp@bDx@~FhAv@~IVbDs@zf@g@b^YfSMrFOxHKzGCjDHt@Ad@vBcAj@SAf@?Pu@ZNFFBMXU@IFKLERi@@MDQZCbD_@EqBMqCEm@VyAh@?j@GpDCjBCnACdBV?@?F?D?H?s@jAsAjBY\KV_@h@k@t@{HnKgHnJyPdUaAzAaBxByC`EiJfMeC`Dq@~@UXWVCLAB@CBG?EVWf@o@NUh@q@INGJ@DDTHT?LAFLl@Zi@nAiCd@e@j@cAr@aAxCaEJSMQOIIGSOu@e@_C}AUOk@g@sCyCyCuCcBgB_@_@IAJUOQACU@WG]Cs@oASYKmB]}KWgJMwDCUG_CAMGO}FeCmh@eTNo@','smvwFxkebMK{@YYcEaDiRuN_\qVmA~CiH|RuC~H{C|H_ExKkE|LyBdGl@b@pBxAzAlAfD~CKR|C{GzEkKdCuGxBeGZy@NLnV~QrH|FYv@','_a`xF~kgbMZcAeBkAKGJ[?ACEEQA[IAGCEIIk@@k@zBkHTw@f@}A^qAJw@D[Fs@Jy@~FmRb@gAlAwB|@}A`@o@n@yAb@gARPFFFPOf@wAnD_A~BvBhCpAUj@Wx@e@bAw@jAeAv@aA|@sAbAkBbBcE\]RCj@Lp@JRBPJ~BdBlAj@DAj@uBBCLHDBHADKh@X`DtC~ItH|BlC`CrBxCfCEN?HLP~@x@zCjCpA~@rAn@n@P~@RdAFl@?rAKh@KzAe@b@S`@[v@m@hBsAvGwEjPgLxCsBrDgClAu@f@YD@~CaCJEhCuB^_@LM|AkBvAwBlBuCfBoCNYCCKLE?CEGGLSjCaEb@k@~B_EFKMOQUsN_RqDcF}AaByEqGxEpG|A`BnAoBdDkFjBsC`BmCzKvNz@x@ZRrAbAjQ`N|H|F~NdLvMzJhA}Cj@yAk@xAxM`KfHhFpH|F|IvGFRFd@@XBvILrUDpDNpBXdB^bBZz@^t@f@z@d@l@dF~FNLELa@jACJ?`@^zA@LI\Qb@GRPDiAfDi@bBYbAk@hBOTUh@GVBBBB?H_CbHwQ`j@{Ope@qM|`@Wj@k@bBa@hA{AtEMPCAFa@h@eBNWj@_B}AcAo@a@kBbGKZqKx\}BlH_CyAyFuDsNkJe[qSgOyJeG}D{F{DaGwDyCqBoFsDuNmJgK{GiFsDoCiB}FwDwFwD_OuJqCgBmJkGuJqG{FwDxAyE^kAiCcBcG_EyFuDeMkI','qvnwFfzvbMvCf@tBRv@Lj@RpBd@bCTnAXrA`@dB`@BWl@iCzA_HbAaE}@s@qB_BcBkAqHiG{HkGOMO\aCzGmCpHq@dB_BdF_@hA','qvcxFvsgbMzCoJPo@Di@?kF?g@^qJRgADk@|BmNLw@Be@b@qCp@_EJSJe@xAwIlDcTpB}LPu@dAgDNy@Rk@|A{EjCaLnBmId@_DzAoMtCqUFYDIIVcCu@WKGq@sBaL{BuLqNgO{KeLyEcFkEmE?qA?}BSAM?}AB{J\}BFQIwADiLE_JCgEBaB?wAOqAc@oCoA}CeBgIeEoIaEsBmAyC_Bw@i@OKq@M_@MaAe@MGLFFBSr@w@xCMLoAPKFIFGV_@vAWt@u@~As@vA{EtJ_CxEoBxD_CxEQj@k@hBu@fBs@vBQxAeAc@Il@Ed@_BhH{ApGId@bCfADBHDl@XrAl@aAnFAV_@pBWzA@LJN_@`BEd@e@tUUfJPfDDp@L`CEp@q@~BY|@eDjKG\C`@@RDRHTf@p@`@t@Ph@BV@RU^e@d@w@Do@ZKLGXl@nIFjB~CdBVLPHJFb@Vo@_@i@W_DeBm@lD@n@Dp@Nn@Xn@LNVXv@p@XRVLVJPDIx@EnB?\FtBGn@]bAeMn^QVWLa@PQBI?AB?JeAvCdBfAlFhDRRRNl@^\THF{B`HyElOM`@La@xFrDdGzDfC|AGZnC`@nBX^D~CJ~@Bn@CV@RDRJx@Df@HzCp@`Dl@J?nCMp@@fI~@lC[d@GDE\{@HUBL@LJNL?ZCTCJBpC~@rGrBdDv@vHfBrOpEbKzCVJ|FzDfC`BjAyDdD_KrFkQlCqI','klpwFjssbM~@wDlBaI`@cBFi@Fk@?CWKUEU@MAu@UcJaC{F{ASz@_AnD}AnGKr@D[`At@hEdDr@f@lEpAR@ELe@tA[nAmA~CxFvEvDvCfH|FKLJM~DmGLJMKsCgCoD_DiEoDsAgA','u|vwFv_qbM|FrDdAcDOKCCEPi@]ECIGBGv@eC{AaA{@lCIGYSSMWx@EEWOIR[dA','}~swFbttbMPi@qAy@wAaAkIqFaR{LqF`QoFvP@GcC_BwFsDwFsDwGcE}AkA_BeA{CwB{BuAe@xAkAtD{EbOcBjFa@rATL@Dg@vAGNoAy@lHpExGpENc@ZRx@^zHrB~C~@tA\dBb@\Fb@@v@@t@ItAYL?RJJ@JC`@Sx@Y\QZE`@@|Fn@xI|@p@FLEJGTF`@DbCXPFjAP|@HANfD^BS@cAViBx@aDdD_K`D_K','qoywF~lpbMX_@@KFy@Li@Pe@f@{@FWNu@PWVMFAy@i@_AW]g@SHQR]p@k@v@eA|@SJQ@[EUGu@]i@a@cAaAi@k@La@Dg@J_Ax@[ZWBFCGBk@Jo@Rk@LWTWtAwA\e@BGb@TfA`BNRJVHn@BTD@|@q@XCVDJOPg@@i@Sq@e@o@wAq@_Ae@HOFM?O@]AQIWKKECCAAa@SiBF_ALa@X[RQb@s@BAD?DFTj@pAg@RMh@QPt@Rn@Df@?\EPIF[HUNEJE`@E`@@PIh@Od@CD@FJEX?`@HhAh@t@Dt@HN?\SVYNYVcABYFk@Pc@Z[VUJWBQM[CCPg@@OC_@FSKKMG_Ac@QGG?P[b@Xx@\E]@_@BK@EkAo@k@_@Tq@FQvBzA`BhA\PQd@Wt@e@bAuC`JMLk@hBqFxPsDrL','amzwFhtnbMPyBLaAmBo@UMGd@u@WOgAEQYg@QK[_@MU[OC]IK]Ja@Cx@fBTbA@VS?EBKPA`@FLNJD@AH@jAh@bAf@Z@j@J?VCFd@ZRRFZK~@Uf@Y','o}uwF|plbMeAeAHO?AwCkEMKk@g@AGeBiBm@gAWq@Oa@KQ}@kAy@}@BM@QEMsA}A{DoDcCwBAEASmFkGQSa@MEESM[So@gAII@]c@a@IIyA}@QKa@CUACEg@[aAo@GI[a@MGYo@cDmCm@c@QWuAuBu@aAwDyCwBgBcAu@kGeFuAiAeDwCcCyBkAy@uEyCwCkCiAcA}AeCi@y@KKM]e@oAOQmBgAeAu@cAi@o@I]AAR_@z@Sv@A`AYx@OBA?e@UIAG@IDe@pA\z@f@p@Z\z@n@b@`@pC~Cb@r@Td@dApAzA`A^Pz@PJDFD?B?FBDhAr@T?B@T`ABBbBhAn@`@dBzAjAdAj@^lBpA~B`BlBvAt@j@BDE\b@h@`AfA\f@bA|@bCpBdD~Bx@`@d@Hp@BTL~AvAHBDARZ|ArB`AhAl@`@XVFHHBDEJXP\zAtAr@h@ZNVCHAFBFNFLxAdALHLHh@`@Xb@Id@BLj@`@~@x@nGxFjDrCZT`@h@`@l@\`@\T~@b@v@J\FPR^PV@LCFExA|An@f@?D?HJLbDbB','}x|wFl~fbM}FcEkCeBjA{Dj@kBXy@J_@T?`@AVAl@Ul@c@\_@P]~AeFHk@Aw@Ga@\Uh@W@MHYb@q@l@g@JGKFWPi@l@OXIXALi@V]TU_@a@_@wDkCm@Ug@C{@Fw@JuAHyA?q@EsAOiASwAc@s@Ys@_@GBIFSp@]jAKIsIkHaDuCc@o@Oi@Ee@CiAKk@GOJYFMCGeEsD_CuBwCaDcB{BVSDA?GBOFELC?MRFZZL\VORDbAMLARLNWx@OPDLATMVFDUP_@RUBCCEAQAYGi@A[AK@J@ZDRBn@@PBDCBSTQ^ETOGOBMHM@QEy@NOVSMM@cALWCSLEKS_@YQUGu@A]O_@a@Uo@GYw@YCBELQf@Kv@a@BOD[LWRWX_ApBUh@GLCJ]`Am@|Aq@|@qBlBy@fA{@dBk@bBSz@SpAABVJLRt@f@pAx@j@eBFMt@\f@R^Hb@HMX','{uvwFn|ybMpBb@^F`KxBdB\RNzA^~SfEhIfB~Bb@|Cr@lFfA|IdBxNzCxFhAyFiAaAtJaCdVaBrPDVWVYVm@j@a@VSHQDB~@EDCJAN@FJPK\GJUKKXABi@YCCA?C?ELPf@@TqC|Ky@`D_A|CsCtIe@xANF@@DL@FD?FD@Hc@zAABr@`@H`ADED@~A`ACJbDpBB@CAcDqBH]@QcBgA_CyAyKyGqHqEgIcFyUuN}BuA_GuDkAs@jAr@Z}@T}@FI~@Q\C\Ij@OXGNALBJQC_@b@URSd@eApDcNz@_DcEsDg@c@eMiIgBiAGCRuBn@}GpBgRLmA','}klwFxtvbMiAuFeAwGeAoFsE}HuKaSaB_DcBcBDc@]cC}@{B_AqAaAwAaDeH{BgIgC}T{Dkd@Qg@}@qPRaBNQ@oE}@mT_BcHkBqCuF}Cg[oMeSeBqHo@iDmAwLsGsFmBcFc@i@MkFSuBv@aFvFaC|BZn@ZABX\GP?bBaCbEuEcEtEmB`Ce@F{UxD_DW_EQaL_HuFkBoHeAkCJmDu@qAm@}A{@Of@gBnF{B{AuFqDeI}F{CgCuGgDoHkFeC_C{DgBoLkH}f@e\kiBqlAkgA{s@if@u[sViP|AwENc@Lm@Ml@Ob@o@pBm@dBs@e@sCkBIGo@g@qCbJ}AtEiJtYiAnDqFoDgGcEgJeGoD}B}@g@{Dw@yIs@qBBY`@_Bo@cNq@o@TqAi@kAToFf@wAHuChIsCoB}B{AKZcFrOuFjQqAbE}BwAyFwDyFuDwC}AmFgB]SmAzCi@nByBm@yBeBeDoAmDgDsGiIgH_Jcf@eUwIgC{FgC_I{EcGoDgNyIqAQmM_IgAuAsFuDs@S{Eu@aBPgAK}B^uCCcAb@yC_BuUwO[NeAoAwi@i^wAuALc@fC_I_Am@~@l@gC~HMb@eAbDkEdNgBrFCdBFxCl@lAj@b@Jh@?lABbBq@zA\nCY~BmBxAk@DD^AJODwAWwEeD{CaAeCNcA`Cp@e@lBMx@XK~@Ch@L\b@?v@ZvBhBt@hAA`@CH@^Tl@u@z@MJIX@PhBvAtA~@Nf@Nl@jAv@`Eu@l@IlAhAlFnFfBtApFZTOtA{BzA^r@wC\c@nBxC`BsB^k@|AqBPIlDzHtBlCfBjAz@LnCSvAL~GtClIhCrRhIpItB~D`B~MxFfC`AlBvBjD`Ev@fAnDfA|P~CnG~@jH`@vOdKfV`Pxn@za@vv@xg@vB|AaF`PCFYhAc@hBdDrCnKvKpGdFzF`DdBdAr@LtDrCxOhJzCzAfFjDbG`EhQxLxd@xYrQdLfOdKrTrM~i@v\hHvDrB?hBl@`UhO~BnBLv@jBtAjDdClAFzGjEp@\hDXrC`@p@\b@O~FlDpVpPtDhCz@vAxCzEfAnAzFhEpb@nXxD~B|NbEhFjAdBAfAUx@LlBk@l@m@Ha@hAChY`DfFl@zKzAxAdAzB~@hC`@fGUlJ^z@Hb@@Bz@lFPp@F|AJdOj@jBGXCp@DJg@L?XFx@FdBBdO|@t^bExUpDdN`CnCr@vBRdAXzLnBhD|@p@D`@RnE`AxE|ArQdFPc@VJZJTOT]t@uA\i@r@]~@h@pAc@b@_@|@}AxAcBVe@','of|wFlrnbM[URm@LY@E@]p@WbAi@t@y@`@_@Ra@P_AAIGW?SP}AJ?D]BUL{@?i@EkAp@c@`@}@Je@BURAd@Q^[\Yl@OV?LFFDGEMGA_@M{@Og@U_@]M_@EYESOU]OKo@Oc@IaB_AYYc@a@Wm@S{@GW@SF]N[JS`@Qa@PKROZG\It@OdASj@Oz@w@Pc@`@Yb@Qf@Oz@?l@Dp@QFMs@M[WWYS]Ks@BMBQLU\CzAGf@M\c@l@RTTRr@j@Sb@a@p@g@f@Kx@@r@E@CLc@x@_@l@Up@@BHFIV|FzD|E`D','ss~wFdqjbMlKbH`KrG~IdGLJzBcHL[IGsBuAaC_BsNkJ_KwGCAk@hBwAvEd@Z~B|A\TnH|EzHbF`InFzBcHL[kBmAyAcA_EmCmJiG{B{A}ByAmAtDy@hCeCaBQK','ollxFhl}aMX?TIl@[~GiFl@g@~@w@^e@Vm@Jk@C{@AaAD]L[NKXMn@@j@NPHXTVNXJLEb@Gb@@rCXnC\vCZ\@d@G`@G|@SjBWh@BJDRLx@PrB^hTbEdFz@fDr@~Dp@bCd@`ATn@_@b@Wd@s@tAqBnEsHrImN`BcCzEdCn@ZJSz@sF|@_EoAi@nAh@~EcReBkAcFuDcBqAQU{GkMc@iAK]UsAcIrB_AJo@HG[iCa@yEu@?a@c@KWIGE_B^gBt@mCp@sDbAYD[?}A^kAZwNrD}@TW?MEuB}A[SeBsAUWE`@MT]r@SXQPiB?iRSEdFsJ[}CIcAEoB@iABMB?^IDGNG@E?@VDTG^y@tAK@CHCPKVUf@O\_AfCe@dBG?CJCb@ARm@vDc@fAi@f@s@\gAb@c@PORuCvDELs@AM@GMiBmCU@K@CHELCDI@QCo@~@_BtAfDtHnBcBoBbBzChHP^PKD@BFFDJ?HDPl@lCqAhB{@XVPXh@v@r@`Ap@tA^t@Vx@RvAVbAd@|@vArC^n@','shrwFnrsbMaAs@Ri@`CeGOSoAeAaEaD_FcEeEiD_Ay@yBcBMC{ByAVu@L_@[Mi@c@o@m@GCYz@oAw@]OEAMXMI{B_@w@Qa@Kk@KkCc@eC]gA]kAOiCi@a@O}@Qa@IBIFU?CGGQKMQKUCKEAICVFb@?PEFCAA?AAA?CAC@I@EHIDAB?JiA`DgKjGwRzD{Lj@^xA|@`GzDvMpIxHbFhErCrH`FHbENTBP@`ADvCD|@FjB|@n@ITYzAK\MPc@lAoDnLcCnHeCzHlAv@tBtAJF\V','qsvwFhksbMsFjQmFrPcEjMa@rA_@`AuKgH_@UIVELKNQ?KEw@i@CLO`@I@ECWSc@xAj@vCBfAK~AiLra@_@nBK`BD~AJjA^nA`@jAb@l@|PvL|E~Dp@fA\pAN`AH~AAz@GpAUdA}FvQIRGAQBw@xBqB`GB`ABxCGlASdB[hDw@SCA','igixFjhhbMFi@UGGCEA[KgA[_ArHIl@F@BB@DALE`BAHCBSL?FFp@En@MrAcAxJ?V@BMdAc@bEc@xCIBGT@LFHa@tDCHK?{MjlAWnCe@lCg@zBYr@Yd@DNDNE@C@E@S~@Ot@NHDBLALCrAn@VJFB|Al@hAZ','idhxF~fhbMhxHv~FvrCx}AbrDpkIcx@bwOxS|oQumEboZcy@xya@jzAjxKux@~lJoDryQ|p@lsYjhOp|x@|aK~la@jmFxue@r`BxnUy@jb^duCjqZfzFjhUpbFd{PncDhg[v~Gzjc@loD|eUtnD`cHbcIjtYt~I|aP~sC~hOzoB`x[mVz{TpdCv{WnfJ|_k@fYnsMkq@~mEnmA|nHtnIbnQigB|_EhyAn{LvgBt|FmWryFw_AvtHvsClbI|vCbwJvjB`gN_oDtuQx`@toCqr@zqHpb@znFqvBpbFqiA~aOnx@fyZn\l`DwoC`vO`iExmIxiCrjIdP~aOqgAn|Pi_DtvMsmDp|JwsDzhNqsGrrVkxCvuQcpArgOilEhhYpvAtcQx`@jvXz|@daVp_C~}Zv{GfrYpx@dhRzmJxcWgoC|hKbd@tuMwkBv`Ud}@fbRjhD~{W`uHf`HoEtxIsb@jdTc|EpzXtwA~{[vtG|zc@vwFvui@svAnaz@wPvhcCjpEn|{CtiA|mLvvIviTttAbzM__@huT__Ad`NwQdpVjsEztiBr|CrigBb}E|rrCxmRr``AvvUluvAzcNzikAxeOhu_Alua@xbiBjlTvqdA|fZhjwAd`Bv|S|qCtnOvpQhmz@{D`oVpaFfiT|lB`qWtiDdwN|jHdrYnjGj|P~_DprEhoBrwL~yAvrQv{B|ph@iTlxGtzDb_EzcCpaJb}HtaNlhD~bKtqB``CdjI`oHdaFl{C~xD|sIdxEpdKbgKhnJfsJdsNx{FlvLnoJxoRl`Cj}Jj|Gvh^dbElrWx~C|xNll@z{Gh_CdgB}ClsD~wDxSd~AxoNtnGd`X|dAn~PvtClpBc@rjGr{B|jShyApzQ~[jhNj~Q`yP~mMddQ`}EpnIvmFpnAfe@~~E`lCdmGpqD~|B~yJlaOxjG`nFzgDj`CdbJzmOxoEt}U`vB`kGv`B``BtzDbnMngKheTb~P~hUtpExnHfoChmObwE`v\kHzjKhh@`cMdqApqCr~AxoDxV``O~G|~T`lCddJhxD`ag@bsBl}\xtHvyXl}FxbOh{AfbMsAnwKD~wDpkEvtBru@`eAzLvoC~uDhxCpb@nbRr_NtyUbxGvwMbc`@x}[hiRzrP~cHxsH|nCl`O|lCrsDx[vhMrTn_LvyEnkFfaPzqK~aBtcJv~Ex}HztI`kW~`DnjJznHn_A|bBdpPfaGxfRzfG`kZzbCdu\ftH|r|@~rLncMddCreItxEd_Idp@bl@pbBh_GtvCb_JhiAh_H','q}`wFjsccM_C`BiAwCQLeA}C{@_CsAcEyCeJNQXs@d@kAJED?Tm@OSBQPk@ZaA\u@v@wA[_AyCeJs@aBa@m@g@m@ofFusEgQaQsGeImDiFmB{C}FaKqLaTyc@}y@aDcGYa@a@Qa@I_@Ac@BiFx@{ATEAEIWqASJULYNIc@GM_@Li@LgAP[Dw@yBMe@EMIWIe@ESAIYFgAHYA}A@k@AEc@Q{@Me@[}@Uc@}@cA[Me@Cu@Kg@MqBeAcEuD}BwBkBoByJqJoBeBcAjAgAhA{@oAAMBa@DUXg@Zc@Zi@Mm@@G?MIUEUAEFKHOtJsM~DqFxBwCbBeCbTgY~I}LbDiE`AuAJWX]v@iAp@}@\o@G?E?I?A?W?BeBBoAJ}G?cA@s@?U@OJEdAa@@uATiAPs@J{@Di@Ba@F_CB{FJkIB_CT?hCHjCDdCC@k@PgKNGAQPU\]f@Yj@SdAOJqFNATCRAnDc@D{E?cCAm@m@?IDaA@i@?FsCF}Ei@FOBDiELyKZuWGuAYaBQk@y@eBk@s@}@w@a@Uk@SmAUMK[GK@}Ba@gE}@sBi@iBo@iAe@cBw@_@Wg@SuGwDcCgAkD}Ak@]}DiBuAi@s@KmCWe@G_Ag@kAs@kK{FqC}AeFoCgBeA}C_Be@McAk@?gDQ[wEuFuCwDsDqGsAiCiA}BWk@wA_CiBkDuB_EYw@eC_Fs@cBaCeFeBkDgAeBq@eAaFd@mZnCs]~Cg@gFk@mCm@{Bs@mCo@gBQe@aAeCQ_@Ee@GUe@iAeEeO{CgL_AiCa@kAaAwCw@yBe@eBaEmN_`@sEs[wD_UkCy@Oi@c@{@u@aJ_HsZoUuM}JYt@}BhGkH|Ryc@_]aAs@WIQp@o@vAwA`CO^gAjBaB`Ci@t@o@bA[a@OSSYOQFKHLF?FGDE@B]l@sChEkC|D]f@mArAONcBxA_Ap@GD{C|BEC_B`AuFtDgTdOiJzGs@j@WRg@XmAb@s@PwANu@@_AE_AOu@Ss@WiAs@iA}@}DiDOQCSDKYUaGeFiCwCsIkHaDuCc@o@IUIe@IsBOe@Pc@@GCCeEsD_CuBwCaDcB{BeDsEo@cAKESi@Wc@KGSQO]I[aEsH_EyGkB_DIRIRIV_HhT_HpTmGcEgFiDaL}G_CuA_CoAaIeEmB}@iCsAgGsCeGyCsIaEsGwBaK_D}A]cOuDa@Qe@M{@CmAm@aAzDF~@MHIFYVw@l@eBhAs@\qGtA]FM?kESc@Gc@q@S]m@}@k@{@{@gA','abuwFxxsbM\TnFwPjIoWzGgTZcAdCwHnMka@yA}@gBmAwHcFuFoDmCiBeBmAkFiDsCmBiCjIuDtL_IpVmDbLqBlGeA~CoCpIyBjG}AhFgAlDq@|BK`@Ja@r@f@xBvAhIpFnTrNvBvA','edvwFz_sbMqJkG}ZiSlVuv@jG}R','u_twFj}pbM{HlVWz@IjACAC?E@CBEL@PA`@Ed@GXGTMA[COBMFm@n@E@oAGqC_@wAMqAQ_Nfb@qDjL_Ao@uJoGkH{EcOuJyZgSsNkJsNmJ{FsD{B}AcJ}FsA}@O`@ADS_@IFMD[BQCQISM[E{@AeEByPRwB@mH?{CIcDCyBEeAAcBCSUcAg@}DeCsGgEcOwJeOyJ{FuDiCgBgC{A{FyDyFoDsNwJ{^iVkK}G}KmHyI{FaCwAwB_BeG_E}CtJyAxEiG_EmFoDeCeB_CsAaOsJqGcEeFqD}FsDwB}AgG}DuA}@gDaCyFuD{B{A}BwA{FyDgK}GcN}IsGmEeC_BkEsC_@[yAcA','ogyvFtambMmLtAsGl@s@oDoBcJaAuDkAgEsDuLsKy]{@cEy\}i@mXeUkMq]oS}RgHsEsGl@cLoByW}WsIuHcX}j@cQk\_GuH_PcHkVgc@sVgc@sG_UuMwe@a_@mgAm]w{@_Qw_BFiXxNcl@dLcz@pBq\nAqo@AyRsGwZbB_xA}@i|@aCkr@wAcd@vCw{@`Dcr@\qv@|BwnAj@e{Afc@qwBjRe~BdH{y@yIc}@iDssAvA_lBrDyjDF}kAqC_oAkKm`AaIgUeIoo@uOqgAaf@_tD{Bg_@uFw`@sFcl@@iZaNysDuJ_dDmAuiA}Aw\zBea@wFmeB{TywAgYwwA}a@g}BqV_uAiQ{mAu@{Jq@wKeBwDkBMYm@y@aDsDkJkPwe@kC{P{@sQqLi`@{Y_mA{g@ozBcQkbA_[whAyVccB}VefCwB}n@rCgYgVesDwDiNuPeLiLc]kTcUoBwk@@yFaAiYsPwsA_Msx@{Dw^uO_b@yOuk@oEwVcKkk@oD_a@{I_`@cNcv@[gXeEs`@j@{PfYek@hJ{[o@}vAaAcOhF}DaBmEsEkJsGyIwD}Nd@q^iAa{@oG}hAiCq[dDs[oFwbAkWuaCyXmmCah@woAoQsBgTwFaRoh@}^y_AoNwk@_HqXxCgd@^qy@_Fkm@eUslBkFqf@|@se@iJks@nDqc@tKwYxCmc@qFs}AkM}oAcd@{xC}eAsmAgJwN{Xgt@sPkl@zA_Z{BqQxC__@lMaj@jNys@jNsnAtAok@eH_e@hRg`AnCoO`@_ZlLasBmQ_UyRu`@wTy]_LeZqBcReDuAk@wL{JiXyM_SwTse@}Um_A_Nc^aOgVcQak@kMub@i^yW}Poo@sL}g@aIeN{XyZ{G}ZoOiUqNwgAib@osBkEgQ@iPtEeRz@ql@_BwY_HgI?wWXgr@yA__@xGeMbCoTwI_~@wAst@`CabAtGot@oGm~AhFi_Ar@qGqBuBoCoFkGkImKgl@se@in@ot@seAgS}ZcFqXqM}LoHcRgHoMaZkT}a@mp@kUe\wGyYm`@wzAqL}h@gOuh@_PwvAuB}u@sQ__AqOa~AeNo}@_We`Ah@q[dKim@_Ey]uOmj@A__@nEoi@V}Bc@mIyTqK}ViWuT}SsGsIuEsa@yEam@@kb@sFkW_Hs]oMog@wB_ScKk\qQy`@iGyT|Dm^dFaUe@iZeH{o@wKse@aj@atCwq@esDmOobA}YgoAwCwS_Py`@oYkf@qQqo@wAkMoMyR}a@_{@k]uo@mNoZwG}v@cDu}@`@kNiDyEaJpD','uyxwFp{nbMUMDKRs@eAs@uFuDcEoCeK{GkH{E}ZkSgLsHaVyOkKaHyJsGuNmJiKaHqFsDeGyDyFyD}ByAeCaB[x@cAa@sAiAkBy@e@]m@m@]W]MaAYWz@EV?PBVCTc@nAO`AOlAq@hBQVWL]HHf@Fj@?\ItAI\ETI?m@HWDYLy@bBWl@Wb@Yv@ORG@IEWr@ARFV_ChHe@zA[n@L^SF@L?^GRlAx@F?DApBrA|B|AhErC~LbIfFhDjCfBtFrDnCdBbG~DxJpGvJpGpFnDzClBjW|PxNpJpO~JpJpGpItF`HrEzBvAtAbA~CrB^NN?`@WOd@Ej@?P?QDk@Ne@VMX?\QFE^kAtCmJjDqKpBqGLMrBqG','kutwFlyqbM|E|CpAx@z@n@HFd@{ArAiEJ[aCaBoFmDIEI\oBhGF@JBD?TMNKBNLZPTVNRDd@CNIFED@HFHBHBD@BJJTLPXRAHGRAD`@Ht@NDGHa@GSQETUN[Da@Ac@[g@c@]k@So@CKm@Ye@QOSISEU??D?E_@VU`@Op@CR?n@hA[?@@BHHH?BANl@Xb@RJTFb@@\G','s|owF|gobMC`@Kt@{@bHIf@w@jCgApDwFrXmCrMo@xCUz@]rBw@pDw@hDeA`FO~@}@nE_@vA]fBW`B{@jDuBjIc@rCq@fE_ChGiDxIqEjLe@fAM`@GhAiA|W','sgpwFfmpbMGVECm@a@aQ|i@gE~MaCpHOp@wCw@mCo@yAYc@GiB_@y@[O?y@Q{@[cBWUMiCo@UA]BwAUgHgAsB[IAIBa@G[AkA@yAJGTa@rAUj@KVC@Ib@S`@OFm@Fg@E_@KMEKVoEuCYS]OiCa@YIQI}AWs@MeEm@qA_@aAMaASwA]YIwB]Q?ODu@t@O@wAM_AOaEa@_Ec@gBUaE[cAKcEe@eD_@GECCSCC@Mb@IRo@_@g@SgC]cAKuCWsASoEs@qAWsN}CkBs@e@WiEqAOA[F[?OI{GcBmCs@mAk@w@YiGtRsCzIkFtPi@]','stuwF|btbM|@{Cj@eB`CoHFO{ByA_Ao@y@i@ABnF{PvFvDzJnGuFfQDOaC}A}B{AcCxHkBdGKRgAjDiBxFu@~BkFrPLJWWqBqAK^J_@nFwPbBoFv@cC|@oC','yjtwF`cubML_@w@g@g@]EOWOuByA_J_GaIkFs@c@H[IZr@b@jEtCtBtAtBvApFaQOKaDuBsDaCmBqAlBpAdJbG`HpE~CrB\TnFwPaCyAkFkDmFmD','}~uwFbtnbMmIuFyJoGwNkJuFyDyFqDyJsGYSKr@aAxCkBvFIRHS|BzAfCbBbGzDjBrAd@TjBlAzBvAzB~AvFvD`CvAzB|A`@TzA`AxFvDtFtDJHO^wB|GeCaByFsDwF{DgDsBqA}@wJqGwJsGsMuIq@g@z@mCB]~@sCjBwF`AyCJs@FDHU|AaFdAkDVu@dG~DbC`BxFvDzJlG`EpCJTd@Zh@`@v@l@LT|BzA`AVb@PH@`@VzCpBpD~Bd@b@nBlBRLJHKIg@dAkCjI','atqwF~spbMjFhDxBxAJYxDuLKI{I{F_EdM','w|swFhvubME??BYACJ[?OGo@Iy@KU?i@IkAQ_@G{ASc@QOCM@O?k@K_@Q_DyBMOIEiAJKBw@BKC]@SHSGI@IAc@WOAi@_@IKc@YQMSAOCiAs@_C}AQKMQ]YYOYCOKKSUUwA_AiBkAQCOIOMQWoAy@_@Ui@O{@i@IGoFoDgBkAm@Si@GYBUDq@Zq@\m@lBkArDSn@{BdH]l@k@b@i@Rm@@[EWGa@SqCkBKI_@s@M_@Ks@As@Bo@F]Ng@MI','ukxwFvtpbMvMvI|A`AzDbCvFxDhG`E','i_ywFhtnbM`CuH}B{AgC`I{ByAfCcI}ByAgC`I}B{AfCaI}B{ACHcCvHsA}@g@]`CoHFO}ByAgC`ICC','istwFburbMyE_D`FyOLO`@uARs@DsA@QAAACAEAIDSDEBAMmBYeAlCsIHWwBuAyFuDuFsDkCgB_C_BoAy@nAx@RPbCuH`I}VlE{MxDfCvJnGfNbJ`MfIfFfD~CrBlAx@gDdKPHAX@TDVRTd@XLHMZOd@VRf@ZFHLX@JAb@DDJF[~@_GdRmCbICJCPHFPNV^Zn@Hf@?DBANF_@nAa@lAK^gEzMaFvOcCcB{FqDgFkDiFgD{EcDc@YSn@','{`nwFzmtbMpBvCzCtD|B~BrB|D`BhCrCtExA~BdBnCbGbKL\t@hEVvAHd@\jA|@pCFxBCj@AHm@r@UTq@`@c@JO@Q?u@KyCYU?I?ICCCCBEH?@']

41.times do
  Route.create(
    user_id: users[0..5].sample.id,
    title: titles.pop,
    polylines: polylines.pop,
    distance: distances.pop,
    completed: completeds.pop,
    created_at: (Time.now - time_mods.sample.hours - time_mods.sample.minutes - time_mods.sample.seconds),
    updated_at: Time.now,
    start_address: start_addresses.pop,
    finish_address: finish_addresses.pop,
    duration: durations.pop,
    completion_time: completion_times.pop
  )
end

Friendship.create(initiator: users[0], receiver: users[1],  status: true)
Friendship.create(initiator: users[0], receiver: users[2],  status: true)
Friendship.create(initiator: users[0], receiver: users[3],  status: true)
Friendship.create(initiator: users[0], receiver: users[4],  status: true)
Friendship.create(initiator: users[0], receiver: users[6],  status: false)
Friendship.create(initiator: users[6], receiver: users[7],  status: false)
Friendship.create(initiator: users[7], receiver: users[8],  status: false)
