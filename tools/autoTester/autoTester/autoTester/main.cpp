#include "autoTester.h"
#include <QtWidgets/QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    autoTester w;
    w.show();
    return a.exec();
}
