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
    int stPon=-2, i=0, pon=0;
    string nekaj;
    while(getline(dat1,vrstica)){
        dat2 << ");" << endl << "pov[" << stPon << "] = new Povezave(";
        stPon++;
        i=0;
        if(vrstica.find("Položaj:")!= std::string::npos){
            while(vrstica!=""){
                if(vrstica.find("Položaj:")!= std::string::npos){
                    nekaj=vrstica[8];
                    dat2 << "'" << nekaj<< "', ";
                } else if (vrstica.find("Beseda")!= std::string::npos){
                    nekaj=vrstica.substr(7,vrstica.length());
                    dat2 << '"' << nekaj << '"'<< ", ";
                } else if(vrstica.find("Pozicija:")!= std::string::npos){
                    nekaj=vrstica[9];
                    dat2 << nekaj<< ", ";
                } else if(vrstica.find("Znak:")!= std::string::npos){
                    nekaj=vrstica[5];
                    dat2 << "'" << nekaj<< "', ";
                } else if (vrstica.find("Slika:")!= std::string::npos){
                    nekaj=vrstica.substr(6,vrstica.length());
                    dat2 << '"' << nekaj << '"'<< ", ";
                } else if (vrstica.find("Script:")!= std::string::npos){
                    nekaj=vrstica.substr(7,vrstica.length());
                    dat2 << '"' << nekaj << '"'<< ", ";
                } else if (vrstica.find("Izgovorjava:")!= std::string::npos){
                    nekaj=vrstica.substr(12,vrstica.length());
                    dat2 << '"' << nekaj << '"';
                }
                if(!getline(dat1,vrstica)){
                    dat2 << ");";
                    return 0;
                }
            }
        }
    }
    dat2 << ");\n";
    dat1.close();
    dat2.close();
    return 0;
}
