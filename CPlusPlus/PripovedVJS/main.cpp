#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    string imeDat, vrstica, imeDatBrezK;
    ifstream dat1;
    ofstream dat2;
    while(!dat2.is_open()){
        cout << "Vnesite ime konène datoteke (s koncnicio): ";
        getline(cin,imeDat);
        dat2.open(imeDat);
    }
    string nekaj;
    for(int b=1;b<17;b++){
        dat1.close();
        imeDat="PRIP";
        if(b<10){
            imeDat+="0";
            imeDat+=to_string(b);
        } else {
            imeDat+=to_string(b);
        }
        imeDatBrezK=imeDat;
        imeDat+=".TXT";
        dat1.open(imeDat);
        dat2 << "\ndat['" << imeDatBrezK << "'] = new Array;";
        for(int i=0;getline(dat1,vrstica);){
            if(vrstica!="" && vrstica!=" "){
                dat2 << "\ndat['" << imeDatBrezK << "'][" << i <<"] =" << '"' << vrstica << '"';
                i++;
            }
        }
    }
    dat2 << ");\n";
    dat1.close();
    dat2.close();
    return 0;
}
