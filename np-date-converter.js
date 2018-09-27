function BikramSambatConverter(){
    this.bs = {
        0: [2000,30,32,31,32,31,30,30,30,29,30,29,31],
        1: [2001,31,31,32,31,31,31,30,29,30,29,30,30],
        2: [2002,31,31,32,32,31,30,30,29,30,29,30,30],
        3: [2003,31,32,31,32,31,30,30,30,29,29,30,31],
        4: [2004,30,32,31,32,31,30,30,30,29,30,29,31],
        5: [2005,31,31,32,31,31,31,30,29,30,29,30,30],
        6: [2006,31,31,32,32,31,30,30,29,30,29,30,30],
        7: [2007,31,32,31,32,31,30,30,30,29,29,30,31],
        8: [2008,31,31,31,32,31,31,29,30,30,29,29,31],
        9: [2009,31,31,32,31,31,31,30,29,30,29,30,30],
        10: [2010,31,31,32,32,31,30,30,29,30,29,30,30],
        11: [2011,31,32,31,32,31,30,30,30,29,29,30,31],
        12: [2012,31,31,31,32,31,31,29,30,30,29,30,30],
        13: [2013,31,31,32,31,31,31,30,29,30,29,30,30],
        14: [2014,31,31,32,32,31,30,30,29,30,29,30,30],
        15: [2015,31,32,31,32,31,30,30,30,29,29,30,31],
        16: [2016,31,31,31,32,31,31,29,30,30,29,30,30],
        17: [2017,31,31,32,31,31,31,30,29,30,29,30,30],
        18: [2018,31,32,31,32,31,30,30,29,30,29,30,30],
        19: [2019,31,32,31,32,31,30,30,30,29,30,29,31],
        20: [2020,31,31,31,32,31,31,30,29,30,29,30,30],
        21: [2021,31,31,32,31,31,31,30,29,30,29,30,30],
        22: [2022,31,32,31,32,31,30,30,30,29,29,30,30],
        23: [2023,31,32,31,32,31,30,30,30,29,30,29,31],
        24: [2024,31,31,31,32,31,31,30,29,30,29,30,30],
        25: [2025,31,31,32,31,31,31,30,29,30,29,30,30],
        26: [2026,31,32,31,32,31,30,30,30,29,29,30,31],
        27: [2027,30,32,31,32,31,30,30,30,29,30,29,31],
        28: [2028,31,31,32,31,31,31,30,29,30,29,30,30],
        29: [2029,31,31,32,31,32,30,30,29,30,29,30,30],
        30: [2030,31,32,31,32,31,30,30,30,29,29,30,31],
        31: [2031,30,32,31,32,31,30,30,30,29,30,29,31],
        32: [2032,31,31,32,31,31,31,30,29,30,29,30,30],
        33: [2033,31,31,32,32,31,30,30,29,30,29,30,30],
        34: [2034,31,32,31,32,31,30,30,30,29,29,30,31],
        35: [2035,30,32,31,32,31,31,29,30,30,29,29,31],
        36: [2036,31,31,32,31,31,31,30,29,30,29,30,30],
        37: [2037,31,31,32,32,31,30,30,29,30,29,30,30],
        38: [2038,31,32,31,32,31,30,30,30,29,29,30,31],
        39: [2039,31,31,31,32,31,31,29,30,30,29,30,30],
        40: [2040,31,31,32,31,31,31,30,29,30,29,30,30],
        41: [2041,31,31,32,32,31,30,30,29,30,29,30,30],
        42: [2042,31,32,31,32,31,30,30,30,29,29,30,31],
        43: [2043,31,31,31,32,31,31,29,30,30,29,30,30],
        44: [2044,31,31,32,31,31,31,30,29,30,29,30,30],
        45: [2045,31,32,31,32,31,30,30,29,30,29,30,30],
        46: [2046,31,32,31,32,31,30,30,30,29,29,30,31],
        47: [2047,31,31,31,32,31,31,30,29,30,29,30,30],
        48: [2048,31,31,32,31,31,31,30,29,30,29,30,30],
        49: [2049,31,32,31,32,31,30,30,30,29,29,30,30],
        50: [2050,31,32,31,32,31,30,30,30,29,30,29,31],
        51: [2051,31,31,31,32,31,31,30,29,30,29,30,30],
        52: [2052,31,31,32,31,31,31,30,29,30,29,30,30],
        53: [2053,31,32,31,32,31,30,30,30,29,29,30,30],
        54: [2054,31,32,31,32,31,30,30,30,29,30,29,31],
        55: [2055,31,31,32,31,31,31,30,29,30,29,30,30],
        56: [2056,31,31,32,31,32,30,30,29,30,29,30,30],
        57: [2057,31,32,31,32,31,30,30,30,29,29,30,31],
        58: [2058,30,32,31,32,31,30,30,30,29,30,29,31],
        59: [2059,31,31,32,31,31,31,30,29,30,29,30,30],
        60: [2060,31,31,32,32,31,30,30,29,30,29,30,30],
        61: [2061,31,32,31,32,31,30,30,30,29,29,30,31],
        62: [2062,30,32,31,32,31,31,29,30,29,30,29,31],
        63: [2063,31,31,32,31,31,31,30,29,30,29,30,30],
        64: [2064,31,31,32,32,31,30,30,29,30,29,30,30],
        65: [2065,31,32,31,32,31,30,30,30,29,29,30,31],
        66: [2066,31,31,31,32,31,31,29,30,30,29,29,31],
        67: [2067,31,31,32,31,31,31,30,29,30,29,30,30],
        68: [2068,31,31,32,32,31,30,30,29,30,29,30,30],
        69: [2069,31,32,31,32,31,30,30,30,29,29,30,31],
        70: [2070,31,31,31,32,31,31,29,30,30,29,30,30],
        71: [2071,31,31,32,31,31,31,30,29,30,29,30,30],
        72: [2072,31,32,31,32,31,30,30,29,30,29,30,30],
        73: [2073,31,32,31,32,31,30,30,30,29,29,30,31],
        74: [2074,31,31,31,32,31,31,30,29,30,29,30,30],
        75: [2075,31,31,32,31,31,31,30,29,30,29,30,30],
        76: [2076,31,32,31,32,31,30,30,30,29,29,30,30],
        77: [2077,31,32,31,32,31,30,30,30,29,30,29,31],
        78: [2078,31,31,31,32,31,31,30,29,30,29,30,30],
        79: [2079,31,31,32,31,31,31,30,29,30,29,30,30],
        80: [2080,31,32,31,32,31,30,30,30,29,29,30,30],
        81: [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        82: [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        83: [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        84: [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
        85: [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
        86: [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        87: [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
        88: [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
        89: [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        90: [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
    };
    this.nep_digits = ["०","१","२","३","४","५","६","७","८","९"];
    this.eng_months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.nepali_months = ["बैशाख","जेष्ठ", "आषाढ़","श्रावण","भाद्र","आश्विन","कार्तिक","मंसिर","पौष","माघ","फाल्गुन","चैत्र"];
    this.nepali_weekdays = ["आइतवार","सोमवार","मंगलवार","बुधवार","बिहिवार","शुक्रवार","शनिवार"];
    this.eng_weekdays = ["Sunday","Monday","Tuesday","Webnesday","Thursday","Friday","Saturday"];
    var nep_date = {};
    var eng_date = {};
    var debug_info = "";

    /**
     * Calculates wheather english year is leap year or not
     *
     * @param integer year
     * @return boolean
     */
    this.is_leap_year = function (year)
    {
        var a = year;
        if (a%100==0)
        {
            if(a%400==0)
            {
                return true;
            } else {
                return false;
            }

        } else {
            if (a%4==0)
            {
                return true;
            } else {
                return false;
            }
        }
    };

    this.get_nepali_month = function(m){
        return  this.nepali_months[m-1];
    };

    this.get_english_month= function(m){
        return this.eng_months[m-1];
    };
    this.get_day_of_week = function(day){
              return this.nepali_weekdays[day-1];
    };

    this.is_range_eng = function(yy, mm, dd){
        if(yy<1944 || yy>2033){
            this.debug_info = "Supported only between 1944-2022";
            return false;
        }

        if(mm<1 || mm >12){
            this.debug_info = "Error! value 1-12 only";
            return false;
        }

        if(dd<1 || dd >31){
            this.debug_info = "Error! value 1-31 only";
            return false;
        }

        return true;
    };
    this.is_range_nep= function(yy, mm, dd) {
        if(yy<2000 || yy>2089){
            this.debug_info="Supported only between 2000-2089";
            return false;
        }

        if(mm<1 || mm >12) {
            this.debug_info="Error! value 1-12 only";
            return false;
        }

        if(dd<1 || dd >32){
            this.debug_info="Error! value 1-31 only";
            return false;
        }

        return true;
    };

    this.to_nepali_number = function(number) {
        str_num = String(number);
        str_nep_num = "";
        for( i = 0; i < str_num.length; i++) {
            str_nep_num += this.nep_digits[parseInt(str_num.substr(i, 1))];
        }
        return str_nep_num;
    };


    /**
     * currently can only calculate the date between AD 1944-2033...
     *
     * @param unknown_type $yy
     * @param unknown_type $mm
     * @param unknown_type $dd
     * @return unknown
     */

    this.eng_to_nep = function(yy,mm,dd){
        yy=parseInt(yy);
        mm=parseInt(mm);
        dd=parseInt(dd);
        if (this.is_range_eng(yy, mm, dd) == false){
            return false;
        } else {

            // english month data.
            var month = [31,28,31,30,31,30,31,31,30,31,30,31];
            var lmonth = [31,29,31,30,31,30,31,31,30,31,30,31];

            def_eyy = 1944;									//spear head english date...
            def_nyy = 2000; def_nmm = 9; def_ndd = 17-1;		//spear head nepali date...
            total_eDays=0; total_nDays=0; a=0; day=7-1;		//all the initializations...
            var m = 0;
            var y = 0;
            var i =0;
            var j = 0;

            numDay=0;

            // count total no. of days in-terms of year
            for(i=0; i<(yy-def_eyy); i++){	//total days for month calculation...(english)
                if(this.is_leap_year(def_eyy+i)==1)
                    for(j=0; j<12; j++)
                        total_eDays += lmonth[j];
                else
                    for(j=0; j<12; j++)
                        total_eDays += month[j];
            }

            // count total no. of days in-terms of month
            for(i=0; i<(mm-1); i++){
                if(this.is_leap_year(yy)==1)
                    total_eDays += lmonth[i];
                else
                    total_eDays += month[i];
            }

            // count total no. of days in-terms of date
            total_eDays += dd;


            i = 0; j = def_nmm;
            total_nDays = def_ndd;
            m = def_nmm;
            y = def_nyy;

            // count nepali date from array
            while(total_eDays != 0) {
                a = this.bs[i][j];
                total_nDays++;						//count the days
                day++;								//count the days interms of 7 days
                if(total_nDays > a){
                    m++;
                    total_nDays=1;
                    j++;
                }
                if(day > 7)
                    day = 1;
                if(m > 12){
                    y++;
                    m = 1;
                }
                if(j > 12){
                    j = 1; i++;
                }
                total_eDays--;
            }

            numDay=day;

            this.nep_date={};
            this.nep_date.year=this.to_nepali_number(y); //
            this.nep_date.month = this.to_nepali_number(m);
            this.nep_date.date = this.to_nepali_number(total_nDays); //
            this.nep_date.day = this.get_day_of_week(day);
            this.nep_date.nmonth = this.get_nepali_month(m);
            this.nep_date.num_day = numDay;
            return this.nep_date;
        }
    };

    /**
     * currently can only calculate the date between BS 2000-2089
     *
     * @param unknown_type $yy
     * @param unknown_type $mm
     * @param unknown_type $dd
     * @return unknown
     */
    this.nep_to_eng = function(yy,mm,dd){
        yy=parseInt(yy);
        mm=parseInt(mm);
        dd=parseInt(dd);
        def_eyy = 1943	; def_emm=4 ; def_edd=14-1;		// init english date.
        def_nyy = 2000; def_nmm = 1; def_ndd = 1;		// equivalent nepali date.
        total_eDays=0; total_nDays=0; a=0; day=4-1;		// initializations...
        var m = 0, y = 0, i=0, k = 0 , numDay = 0;

        month = [0,31,28,31,30,31,30,31,31,30,31,30,31];
        lmonth = [0,31,29,31,30,31,30,31,31,30,31,30,31];

        if(this.is_range_nep(yy, mm, dd)===false){
            return false;

        } else {

            // count total days in-terms of year
            for(i=0; i<(yy-def_nyy); i++){
                for(j=1; j<=12; j++){
                    total_nDays += this.bs[k][j];
                }
                k++;
            }

            // count total days in-terms of month
            for(j=1; j<mm; j++){
                total_nDays += this.bs[k][j];
            }

            // count total days in-terms of dat
            total_nDays += dd;

            //calculation of equivalent english date...
            total_eDays = def_edd;
            m = def_emm;
            y = def_eyy;
            while(total_nDays != 0){
                if(this.is_leap_year(y))
                {
                    a = lmonth[m];
                }
                else
                {
                    a = month[m];
                }
                total_eDays++;
                day++;
                if(total_eDays > a){
                    m++;
                    total_eDays = 1;
                    if(m > 12){
                        y++;
                        m = 1;
                    }
                }
                if(day > 7)
                    day = 1;
                total_nDays--;
            }
            numDay = day;
            this.eng_date={};
            this.eng_date.year = y;
			
			if(m<10){
				m = "0"+m;
			}
            this.eng_date.month = m;
			if(total_eDays<10){
				total_eDays = "0"+total_eDays;
			}
            this.eng_date.date = total_eDays;
            this.eng_date.day = this.get_day_of_week(day);
            this.eng_date.emonth = this.get_english_month(m);
            this.eng_date.num_day = numDay;

            return this.eng_date;
        }
    };

    this.convert = function(yy,mm,dd) {
        nep_date=this.eng_to_nep(yy,mm,dd);
        console.log(nep_date);
        eng_date=this.nep_to_eng(2073,5,29);
        console.log(eng_date);
        return nep_date;
    };
}
