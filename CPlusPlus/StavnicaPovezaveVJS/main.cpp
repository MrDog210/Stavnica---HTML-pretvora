#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    string imeDat, vrstica;
    ifstream dat1;
    while(!dat1.is_open()){
        cout << "Vnesite ime izvirne datoteke (s koncnicio): ";
        getline(cin,imeDat);
        dat1.open(imeDat);
    }
    ofstream dat2;
    while(!dat2.is_open()){
        cout << "Vnesite ime konène datoteke (s koncnicio): ";
        getline(cin,imeDat);
        dat2.open(imeDat);
    }
    bool prvic=true;
    int stPon=0, i=0, pon=0;
    string nekaj;
    while(getline(dat1,vrstica)){

        if(prvic){
            dat2 << ");" << endl << "pov[" << stPon << "] = new Povezave(";
            stPon++;
            prvic=false;
            i=0;
        }
        if(vrstica.find("ŠteviloSlik:")!= std::string::npos){
            nekaj=vrstica[12];
            dat2 << nekaj << ", ";
            pon= stoi(nekaj);
        } else if(vrstica.find("Slika")!= std::string::npos){
            nekaj=vrstica.substr(7,vrstica.length());
            dat2 << '"' <<nekaj << '"'<< ", ";
            i++;
            cout << "\nSt pon: " <<pon <<"      Trenutno: " << i;
        } else if(vrstica.find("Beseda")!= std::string::npos){
            nekaj=vrstica.substr(8,vrstica.length());
            dat2 << '"' <<nekaj << '"'<< ", ";
            i++;
        } else if(vrstica.find("Zvok")!= std::string::npos){
            i++;
            nekaj=vrstica.substr(6,vrstica.length());
            if(i==24 || (pon==7 && i==21))
                dat2 << '"' <<nekaj << '"';
            else
                dat2 << '"' <<nekaj << '"'<< ", ";
        }
        if(pon==7 && i==21){
            dat2 << ", " << '"' << '"' << ", " << '"' << '"' << ", " << '"' << '"';
            prvic=true;
        }
        if(pon==8 && i==24)
            prvic=true;
    }
    dat2 << ");\n";
    dat1.close();
    dat2.close();
    return 0;
}
