using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class removearray : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Guests_Tests_TestId",
                table: "Guests");

            migrationBuilder.DropIndex(
                name: "IX_Guests_TestId",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "TestId",
                table: "Guests");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TestId",
                table: "Guests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Guests_TestId",
                table: "Guests",
                column: "TestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Guests_Tests_TestId",
                table: "Guests",
                column: "TestId",
                principalTable: "Tests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
